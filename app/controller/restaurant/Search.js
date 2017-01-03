Ext.define('Menum.controller.restaurant.Search', {
    extend: 'Ext.app.Controller',
    requires: [
        'Menum.view.restaurant.SearchResultList'
    ],

    config: {
        refs: {
            mainNavigation: 'mainnavigation',
            restaurantSearchForm: 'restaurantsearchform',
            // Location fieldSet
            geolocationCheckbox: 'restaurantsearchform #geolocationCheckboxfield',
            geocodingTextfield: 'restaurantsearchform #geocodingTextfield',
            radiusSelect: 'restaurantsearchform #radiusSelectfield',
            // Cuisine fieldSet
            cuisineSelect: 'restaurantsearchform #cuisineSelectfield',
            // Search button
            searchButton: 'restaurantsearchform #searchButton'
        },

        control: {
            geolocationCheckbox: {
                change: 'onGeolocationCheckboxChange'
            },
            searchButton: {
                tap: 'searchRestaurants'
            }
        }
    },

    onGeolocationCheckboxChange: function(checkbox, newValue, oldValue) {
        newValue ? this.getGeocodingTextfield().disable() : this.getGeocodingTextfield().enable();
    },

    searchRestaurants: function() {
        var me = this,
            restaurantSearchForm = me.getRestaurantSearchForm(),
            getRestaurants = me.getRestaurants(me),
            geocodingTextfield = me.getGeocodingTextfield();

        restaurantSearchForm.setMasked({
            xtype: 'loadmask',
            locales: {
                message: 'loadmask.restaurantsSearch'
            }
        });

        if (me.getGeolocationCheckbox().isChecked()) {
            Menum.util.GeolocationManager.getCurrentPosition(function(position) {
                if (position) {
                    getRestaurants(position.coords.latitude, position.coords.longitude, position.coords.accuracy);
                } else {
                    restaurantSearchForm.unmask();
                    Ext.Msg.alert({
                        locales: {
                            title: 'messageBox.geolocationFailed.title'
                        }
                    }, Ux.locale.Manager.get('messageBox.geolocationFailed.message'));
                }
            });
        } else {
            // GMaps geocoding
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({'address': geocodingTextfield.getValue()}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    result = results[0];
                    geocodingTextfield.setValue(result.formatted_address);
                    getRestaurants(result.geometry.location.lat(), result.geometry.location.lng());
                } else {
                    restaurantSearchForm.unmask();
                    Ext.Msg.alert({
                        locales: {
                            title: 'messageBox.geocodingFailed.title'
                        }
                    }, Ux.locale.Manager.get('messageBox.geocodingFailed.message'));
                }
            });
        }
    },

    getRestaurants: function(me) {
        return function(latitude, longitude, accuracy) {
            var params = {
                lat: latitude,
                lng: longitude,
                acc: accuracy,
                dist: me.getRadiusSelect().getValue(),
                lang: Ux.locale.Manager.getLanguage()
            };

            var cuisine = me.getCuisineSelect().getValue();
            if (cuisine && cuisine !== '*') {
                params.cuisine = cuisine;
            }

            var restaurantsStore = Ext.getStore('restaurantsStore');
            restaurantsStore.setParams(params);
            restaurantsStore.load(function(records, operation, success) {
                me.getRestaurantSearchForm().unmask();
                if (success) {
                    if (records.length === 0) {
                        Ext.Msg.alert({
                            locales: {
                                title: 'messageBox.noRestaurantsFound.title'
                            }
                        }, Ux.locale.Manager.get('messageBox.noRestaurantsFound.message'));
                    } else {
                        me.getMainNavigation().push(Ext.create('Menum.view.restaurant.SearchResultList'));
                    }
                } else {
                    Ext.Msg.alert({
                        locales: {
                            title: 'messageBox.restaurantSearchFailed.title'
                        }
                    }, Ux.locale.Manager.get('messageBox.restaurantSearchFailed.message'));
                }
            }, this);
        }
    }
});