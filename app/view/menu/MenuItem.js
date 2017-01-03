Ext.define('Menum.view.menu.MenuItem', {
    extend: 'Ext.Panel',
    xtype: 'menuitempanel',

    config: {
        scrollable: 'vertical'
    },

    initialize: function() {
        var me = this,
            menuItem = me.getRecord();

        //=======================================
        //~ Dynamic Menu Item view construction =
        //=======================================

        me.add(Ext.create('Ext.Panel', {

            cls: 'menu-item',

            items: [
                // Menu Item details container
                {
                    xtype: 'container',
                    cls: 'default-container',

                    items: [
                        {
                            xtype: 'container',
                            html: menuItem.get('name'),
                            cls: 'name'
                        },
                        {
                            xtype: 'image',
                            src: menuItem.get('hasImage') ?
                                menuItem.get('imageURL') :
                                'resources/images/image_not_found.jpeg',
                            flex: 1,
                            cls: 'image'
                        },
                        {
                            xtype: 'container',
                            html: menuItem.get('description'),
                            cls: 'description'
                        },
                        {
                            xtype: 'container',
                            html: menuItem.get('amount') + ' ' + Menum.util.Config.getCurrencySymbol(menuItem.get('currency')),
                            cls: 'last-element price'
                        }
                    ]
                }
            ]
        }));

        me.callParent(arguments);
    }
});