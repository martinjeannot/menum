Ext.define('Menum.store.restaurant.Restaurants', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'Menum.model.restaurant.ShortRestaurant',
        storeId: 'restaurantsStore',

        proxy: {
            type: 'jsonp',
            url: Menum.util.Config.getRestaurantsURL()
        }
    }
});