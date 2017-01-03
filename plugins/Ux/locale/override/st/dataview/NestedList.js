Ext.define('Ux.locale.override.st.dataview.NestedList', {
    override: 'Ext.dataview.NestedList',

    setLocale: function(locale) {
        var me                 = this,
            locales            = me.locales || me.getInitialConfig().locales,
            title              = locales.title,
            manager            = me.locale,
            defaultTitle       = '';

        if (title) {
            if (Ext.isObject(title)) {
                defaultTitle = title.defaultTitle;
                title = title.key;
            }

            title = manager.get(title, defaultTitle);

            if (Ext.isString(title)) {
                me.setTitle(title);
            }
        }

        me.callParent(arguments);
    }
});