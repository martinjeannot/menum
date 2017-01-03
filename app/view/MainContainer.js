Ext.define('Menum.view.MainContainer', {
    extend: 'Ext.Container',
    xtype: 'maincontainer',
    requires: [
        'Menum.view.MainNavigation'
    ],

    config: {
        fullscreen: true,

        layout: 'vbox',

        items: [
            {
                xtype: 'mainnavigation',
                flex: 1
            },
            {
                xtype: 'container',
                docked: 'bottom',
                cls: 'background-base-color',
                height : 50 //admobAd.AD_SIZE.BANNER.height
            }
        ]
    }
});