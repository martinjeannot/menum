Ext.define('Menum.controller.MainNavigation', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainNavigation: 'mainnavigation',
            languageSelector: 'mainnavigation #languageSelector'
        },

        control: {
            mainNavigation: {
                initialize: 'onMainNavigationInit',
                activeitemchange: 'onActiveItemChange'
            },
            languageSelector: {
                change: 'onLanguageSelectorChange'
            }
        }
    },

    onMainNavigationInit: function() {
        // localization init
        var me = this,
            languageSelectorOptions = [];
        Ux.locale.Manager.getAvailable(true).forEach(function(locale) {
            languageSelectorOptions.push({text: locale.text, value: locale.abbr});
        });
        me.getLanguageSelector().setOptions(languageSelectorOptions);

        var navigatorLanguage = navigator.language ? navigator.language.split('-')[0] : navigator.userLanguage.split('-')[0];
        me.getLanguageSelector().setValue(navigatorLanguage);
        if (navigatorLanguage === me.getLanguageSelector().getValue()) {
            Ux.locale.Manager.updateLocale(me.getLanguageSelector().getValue());
        }
    },

    onLanguageSelectorChange: function(languageSelector, newValue, oldValue) {
        Ux.locale.Manager.updateLocale(newValue);
    },

    onActiveItemChange: function(mainNavigation) {
        var me = this;
        // language selection is only available on the Home screen
        if (mainNavigation.getInnerItems().length <= 2
            && me.getLanguageSelector().isHidden()) {
            me.getLanguageSelector().show();
        } else if (!me.getLanguageSelector().isHidden()) {
            me.getLanguageSelector().hide();
        }
    }
});