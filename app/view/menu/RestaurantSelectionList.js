Ext.define('Menum.view.menu.RestaurantSelectionList', {
    extend: 'Ext.dataview.List',
    xtype: 'restaurantselectionlist',
    requires: [
        'Ext.TitleBar'
    ],

    config: {

        locales: {
            title: 'restaurantselectionlist.title'
        },

        store: 'restaurantsStore',

        itemTpl: '<span style="text-align:center">{name}</span>'
    }
});