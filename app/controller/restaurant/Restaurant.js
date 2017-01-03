Ext.define('Menum.controller.restaurant.Restaurant', {
    extend: 'Ext.app.Controller',
    requires: [
        'Menum.view.menu.Menu',
        'Menum.view.restaurant.RestaurantDirections'
    ],

    config: {
        refs: {
            mainNavigation: 'mainnavigation',
            restaurantView: 'restaurantpanel',
            menuButton: 'restaurantpanel #menuButton',
            directionsButton: 'restaurantpanel #directionsButton',
            travelModeSelect: 'restaurantpanel #travelModeSelectfield',
            openingDaysAndHoursButton: 'restaurantpanel #openingDaysAndHoursButton',
            openingDaysAndHoursModal : 'restaurantpanel #openingDaysAndHoursModal'
        },

        control: {
            menuButton: {
                tap: 'onMenuButtonTap'
            },
            directionsButton: {
                tap: 'onDirectionsButtonTap'
            },
            openingDaysAndHoursButton: {
                tap: 'onOpeningDaysAndHoursButtonTap'
            }
        },

        directionsService: new google.maps.DirectionsService()
    },

    onMenuButtonTap: function() {
        var me = this,
            restaurantView = me.getRestaurantView(),
            restaurant = me.getRestaurantView().getRecord();

        restaurantView.setMasked({
            xtype: 'loadmask',
            locales: {
                message: 'loadmask.menuRetrieval'
            }
        });

        var menuStore = Ext.getStore('menuStore');
        for (var i = 0, len = restaurant.get('links').length; i < len; i++) {
            var link = restaurant.get('links')[i];
            if (link.rel === 'menu') {
                menuStore.getProxy().setUrl(link.href);
                break;
            }
        }

        // setParams doesn't work so we're forced to use this listener...
        menuStore.addListener('beforeload', function(store, operation, eOpts) {
            var params = operation.getParams();
            params.lang = Ux.locale.Manager.getLanguage();
        });

        menuStore.load({
            callback: function(records, operation, success) {
                restaurantView.unmask();
                if (success) {
                    me.getMainNavigation().getNavigationBar().hide();
                    me.getMainNavigation().push(Ext.create('Menum.view.menu.Menu'));
                } else {
                    Ext.Msg.alert({
                        locales: {
                            title: 'messageBox.menuRetrievalFailed.title'
                        }
                    }, Ux.locale.Manager.get('messageBox.menuRetrievalFailed.message'));
                }
            },
            scope: this
        });
    },

    onDirectionsButtonTap: function() {
        var me = this,
            restaurantView = me.getRestaurantView(),
            restaurant = me.getRestaurantView().getRecord(),
            selectedTravelMode = me.getTravelModeSelect().getValue();

        restaurantView.setMasked({
            xtype: 'loadmask',
            locales: {
                message: 'loadmask.restaurantDirectionsRetrieval'
            }
        });

        Menum.util.GeolocationManager.getCurrentPosition(function(position) {
            if (position) {
                var directionsRequest = {};

                directionsRequest.origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                directionsRequest.destination = restaurant.get('address');
                directionsRequest.travelMode = google.maps.TravelMode[selectedTravelMode];

                me.getDirectionsService().route(directionsRequest, function(directionsResult, directionsStatus) {
                    restaurantView.unmask();
                    if (directionsStatus === google.maps.DirectionsStatus.OK) {
                        var mapView = Ext.create('Menum.view.restaurant.RestaurantDirections', {
                            record: restaurant
                        });
                        var directionsDisplay = new google.maps.DirectionsRenderer({
                            map: mapView.getMap(),
                            directions: directionsResult
                        });
                        me.getMainNavigation().push(mapView);
                    } else {
                        Ext.Msg.alert({
                            locales: {
                                title: 'messageBox.restaurantDirectionsRetrievalFailed.title'
                            }
                        }, Ux.locale.Manager.get('messageBox.restaurantDirectionsRetrievalFailed.message'));
                    }
                });
            } else {
                restaurantView.unmask();
                Ext.Msg.alert({
                    locales: {
                        title: 'messageBox.geolocationFailed.title'
                    }
                }, Ux.locale.Manager.get('messageBox.geolocationFailed.message'));
            }
        });
    },

    onOpeningDaysAndHoursButtonTap: function() {
        this.getOpeningDaysAndHoursModal().show();
    }
});