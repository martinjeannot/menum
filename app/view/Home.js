Ext.define('Menum.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',

    config: {
        layout: 'vbox',
        defaults: {
            flex: 1
        },

        title: 'Menum',

        cls: "home",

        items: [
            {
                xtype: 'container',
                layout: 'vbox',
                defaults: {
                    flex: 1
                },
                cls: 'default-container',

                items: [
                    {
                        xtype: 'container',
                        locales: {
                            html: 'homepanel.searchRestaurant.label'
                        },
                        cls: 'label'
                    },
                    {
                        xtype: 'button',
                        itemId: 'searchRestaurantButton',
                        locales: {
                            text: 'homepanel.searchRestaurant.buttonText'
                        },
                        ui: 'action-round',
                        cls: 'last-element'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'vbox',
                defaults: {
                    flex: 1
                },
                cls: 'default-container',

                items: [
                    {
                        xtype: 'container',
                        locales: {
                            html: 'homepanel.getMenu.label'
                        },
                        cls: 'label'
                    },
                    {
                        xtype: 'button',
                        itemId: 'getMenuButton',
                        locales: {
                            text: 'homepanel.getMenu.buttonText'
                        },
                        ui: 'action-round',
                        cls: 'last-element'
                    }
                ]
            }
        ]
    }
});