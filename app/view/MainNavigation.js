Ext.define('Menum.view.MainNavigation', {
    extend: 'Ext.navigation.View',
    xtype: 'mainnavigation',
    requires: [
        'Menum.view.Home'
    ],

    config: {

        locales: {
            defaultBackButtonText: 'mainnavigation.defaultBackButtonText'
        },

        navigationBar: {
            docked: 'top',

            items: [
                {
                    xtype: 'selectfield',
                    itemId: 'languageSelector',
                    align: 'right',
                    width: '90px',

                    // FIXME : the following is a workaround for a bug affecting this selectfield scroll (it gets stuck at top)
                    // The weird thing being that it works perfectly fine *after* another action (language selection, screen switch...)
                    usePicker: true,
                    defaultPhonePickerConfig: {
                        doneButton: {
                            iconCls: 'check'
                        },
                        cancelButton: {
                            iconCls: 'delete'
                        }
                    },
                    defaultTabletPickerConfig: {
                        doneButton: {
                            iconCls: 'check'
                        },
                        cancelButton: {
                            iconCls: 'delete'
                        }
                    }
                }
            ],
            ui: 'dark'
        },

        items: [
            {
                xtype: 'homepanel'
            }
        ]
    }
});
