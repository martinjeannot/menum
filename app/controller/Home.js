Ext.define('Menum.controller.Home', {
    extend: 'Ext.app.Controller',
    requires: [
        'Menum.view.restaurant.Search',
        'Menum.view.menu.RestaurantSelectionList'
    ],

    config: {
        refs: {
            mainNavigation: 'mainnavigation',
            homeView: 'homepanel',
            searchRestaurantButton: 'homepanel #searchRestaurantButton',
            getMenuButton: 'homepanel #getMenuButton'
        },

        control: {
            searchRestaurantButton: {
                tap: 'onSearchRestaurantButtonTap'
            },
            getMenuButton: {
                tap: 'onGetMenuButtonTap'
            }
        }
    },

    onSearchRestaurantButtonTap: function() {
        this.getMainNavigation().push(Ext.create('Menum.view.restaurant.Search'));
    },

    onGetMenuButtonTap: function() {
        var me = this,
            homeView = me.getHomeView();

        homeView.setMasked({
            xtype: 'loadmask',
            locales: {
                message: 'loadmask.restaurantsSearch'
            }
        });

        Menum.util.GeolocationManager.getCurrentPosition(function(position) {
            if (position) {
                var restaurantsStore = Ext.getStore('restaurantsStore');
                restaurantsStore.setParams(
                    {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        acc: position.coords.accuracy,
                        dist: 0.2
                    });
                restaurantsStore.load(function(records, operation, success) {
                    homeView.unmask();
                    if (success) {
                        if (records.length === 0) {
                            Ext.Msg.alert({
                                locales: {
                                    title: 'messageBox.noRestaurantsFoundInThisArea.title'
                                }
                            }, Ux.locale.Manager.get('messageBox.noRestaurantsFoundInThisArea.message'));
                        } else {
                            me.getMainNavigation().push(Ext.create('Menum.view.menu.RestaurantSelectionList'));
                        }
                    } else {
                        Ext.Msg.alert({
                            locales: {
                                title: 'messageBox.restaurantSearchFailed.title'
                            }
                        }, Ux.locale.Manager.get('messageBox.restaurantSearchFailed.message'));
                    }
                });
            } else {
                homeView.unmask();
                Ext.Msg.alert({
                    locales: {
                        title: 'messageBox.geolocationFailed.title'
                    }
                }, Ux.locale.Manager.get('messageBox.geolocationFailed.message'));
            }
        });
    }
});