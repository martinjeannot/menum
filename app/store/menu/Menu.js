Ext.define('Menum.store.menu.Menu', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'Menum.model.menu.MenuItem',
        storeId: 'menuStore',

        proxy: {
            type: 'jsonp'
        }
    }
});