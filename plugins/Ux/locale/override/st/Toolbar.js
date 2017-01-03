Ext.define('Ux.locale.override.st.Toolbar', {
    override : 'Ext.Toolbar',

    requires : [
        'Ux.locale.override.st.Button'
    ],

    setLocale : function(locale) {
        var me          = this,
            locales     = me.locales || me.getInitialConfig().locales,
            title       = locales.title,
            manager     = me.locale,
            defaultText = '';

        if (title) {
            if (Ext.isObject(title)) {
                defaultText = title.defaultText;
                title       = title.key;
            }

            title = manager.get(title, defaultText);

            if (Ext.isString(title)) {
                me.setTitle(title);
            }
        }

        me.callParent(arguments);
    }
});