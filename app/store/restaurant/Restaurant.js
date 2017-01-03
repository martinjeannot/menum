Ext.define('Menum.store.restaurant.Restaurant', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'Menum.model.restaurant.Restaurant',
        storeId: 'restaurantStore',

        proxy: {
            type: 'jsonp'
        }
    }
});