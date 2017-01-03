/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

//<debug>
// This avoids the mandatory 'sencha app refresh' when dealing with classpath entries. Unfortunately, it doesn't work for
// native builds where the app.classpath variable in .sencha/app still needs to be modified accordingly.
/*Ext.Loader.setPath({
    //'Ext'    : 'touch/src',
    //'Locale' : 'app',
    //'Ux'     : 'plugins/Ux'
});*/
//</debug>

Ext.application({
    name: 'Menum',

    requires: [
        'Ext.device.Geolocation',
        'Ext.MessageBox',
        'Menum.util.Config',
        'Menum.util.GeolocationManager',
        //'Menum.util.dataview.component.NestedDataItem'

        // I18N
        'Ux.locale.Manager',
        'Ux.locale.override.st.Component',
        'Ux.locale.override.st.Button',
        'Ux.locale.override.st.Container',
        'Ux.locale.override.st.LoadMask',
        'Ux.locale.override.st.MessageBox',
        'Ux.locale.override.st.TitleBar',
        'Ux.locale.override.st.dataview.NestedList',
        'Ux.locale.override.st.field.Field',
        'Ux.locale.override.st.field.Select',
        'Ux.locale.override.st.field.DatePicker',
        'Ux.locale.override.st.form.FieldSet',
        'Ux.locale.override.st.form.Panel',
        'Ux.locale.override.st.navigation.Bar',
        'Ux.locale.override.st.navigation.View',
        'Ux.locale.override.st.picker.Picker',
        'Ux.locale.override.st.picker.Date'
    ],

    controllers: [
        'MainNavigation',
        'Home',
        // Restaurant
        'restaurant.Search',
        'restaurant.SearchResultList',
        'restaurant.Restaurant',
        // Menu
        'menu.RestaurantSelectionList',
        'menu.Menu'
    ],

    models: [
        'restaurant.ShortRestaurant',
        'restaurant.Restaurant',
        'menu.MenuItem'
    ],

    stores: [
        'restaurant.Restaurants',
        'restaurant.Restaurant',
        'menu.Menu'
    ],

    views: [
        'MainContainer'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Get geolocation position
        Menum.util.GeolocationManager.refreshPosition();

        // Localization support
        Ux.locale.Manager.setConfig({
            language   : 'en',
            locales    : Menum.util.Config.getAvailableLanguages(),
            tpl        : 'resources/i18n/locales/{locale}.js',
            type       : 'script'
        });
        Ux.locale.Manager.init();

        // AdMob initialization
        var successCreateBannerView = function () {
            admobAd.showBanner(admobAd.AD_POSITION.BOTTOM_CENTER);
        };
        var errorCreateBannerView = function (message) {
            console.log("create banner fail " + message);
            alert(message);
        };
        admobAd.initBanner(Menum.util.Config.getBottomBannerAdUnitID(), admobAd.AD_SIZE.SMART_BANNER.width, admobAd.AD_SIZE.SMART_BANNER.height, successCreateBannerView, errorCreateBannerView);

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Menum.view.MainContainer'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
