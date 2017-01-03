Ext.define('Menum.view.menu.Menu', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'menunestedlist',
    requires: [],

    config: {

        // FIXME : fix the localized NestedList
        title: 'Menu',
        /*locales: {
            title: 'menunestedlist.title'
        },*/

        toolbar: {
            ui: 'dark',

            items: [
                {
                    itemId: 'mainBackButton',
                    locales: {
                        text: 'menunestedlist.mainBackButtonText'
                    },
                    ui: 'back'
                }
            ]
        },

        store: 'menuStore',

        displayField: 'name',

        listConfig: {
            itemCls: 'menu-nested-list-item',
            itemTpl: new Ext.XTemplate(
                '<tpl if="leaf">',
                    // menu item template
                    '<span class="name">{name}</span>',
                    '<span class="price">{amount} {[Menum.util.Config.getCurrencySymbol(values.currency)]}</span>',
                '<tpl else>',
                    // submenu template
                    '<span>{name}</span>',
                '</tpl>'
            )
        }
    }
});