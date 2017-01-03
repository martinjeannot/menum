Ext.define('Menum.controller.menu.RestaurantSelectionList', {
    extend: 'Ext.app.Controller',
    requires: [
        'Menum.view.menu.Menu'
    ],

    config: {
        refs: {
            mainNavigation: 'mainnavigation',
            restaurantSelectionView: 'restaurantselectionlist'
        },

        control: {
            restaurantSelectionView: {
                itemtap: 'onItemTap'
            }
        }
    },

    onItemTap: function(restaurantSelectionView, index, target, restaurant) {
        var me = this;

        restaurantSelectionView.setMasked({
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
                restaurantSelectionView.unmask();
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
    }
});