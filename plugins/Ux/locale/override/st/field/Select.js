Ext.define('Ux.locale.override.st.field.Select', {
    override : 'Ext.field.Select',

    requires : [
        'Ux.locale.override.st.field.Field'
    ],

    setLocale : function(locale) {
        var me                 = this,
            locales            = me.locales || me.getInitialConfig().locales,
            options            = locales.options,
            manager            = me.locale;

        if(options) {
            if(Ext.isArray(options)) {
                var i = options.length;
                while(i--) {
                    // replacing localization key by localized value
                    options[i].text = manager.get(options[i].text, options[i].text);
                }
            }

            me.setOptions(options);
        }

        me.callParent(arguments);
    }
});
