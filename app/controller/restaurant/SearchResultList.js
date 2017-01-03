Ext.define('Menum.controller.restaurant.SearchResultList', {
    extend: 'Ext.app.Controller',
    requires: [
        'Menum.view.restaurant.Restaurant'
    ],

    config: {
        refs: {
            mainNavigation: 'mainnavigation',
            restaurantSearchResultView: 'restaurantsearchresultlist'
        },

        control: {
            restaurantSearchResultView: {
                itemtap: 'onItemTap'
            }
        }
    },

    onItemTap: function(restaurantSearchResultView, index, target, restaurant) {
        var me = this;

        restaurantSearchResultView.setMasked({
            xtype: 'loadmask',
            locales: {
                message: 'loadmask.restaurantRetrieval'
            }
        });

        var restaurantStore = Ext.getStore('restaurantStore');

        for (var i = 0, len = restaurant.get('links').length; i < len; i++) {
            var link = restaurant.get('links')[i];
            if (link.rel === 'self') {
                restaurantStore.getProxy().setUrl(link.href);
                break;
            }
        }

        restaurantStore.setParams({
            ts: Date.now(),
            lang: Ux.locale.Manager.getLanguage()
        });

        restaurantStore.load(function(records, operation, success) {
            restaurantSearchResultView.unmask();
            if (success) {
                me.getMainNavigation().push(Ext.create('Menum.view.restaurant.Restaurant', {
                    title: records[0].get('name'),
                    record: records[0]
                }));
            } else {
                Ext.Msg.alert({
                    locales: {
                        title: 'messageBox.restaurantRetrievalFailed.title'
                    }
                }, Ux.locale.Manager.get('messageBox.restaurantRetrievalFailed.message'));
            }
        }, this);
    }
});