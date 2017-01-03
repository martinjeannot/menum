Ext.define('Ux.locale.override.st.LoadMask', {
    override: 'Ext.LoadMask',

    constructor : function() {
        this.callSuper(arguments);
    },

    setLocale : function(locale) {
        var me          = this,
            locales     = me.locales || me.getInitialConfig().locales,
            manager     = me.locale,
            message     = locales.message,
            defaultText = '';

        if (message) {
            if (Ext.isObject(message)) {
                defaultText = message.defaultText;
                message     = message.key;
            }

            message = manager.get(message, defaultText);

            if (Ext.isString(message)) {
                me.setMessage(message);
            }
        }

        me.callParent(arguments);
    }
});