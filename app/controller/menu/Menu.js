Ext.define('Menum.controller.menu.Menu', {
    extend: 'Ext.app.Controller',
    requires: [
        'Menum.view.menu.MenuItem'
    ],

    config: {
        refs: {
            mainNavigation: 'mainnavigation',
            menuView: 'menunestedlist',
            mainBackButton: 'menunestedlist #mainBackButton'
        },

        control: {
            menuView: {
                leafitemtap: 'onMenuItemTap',
                back: 'onMenuBackButtonTap',
                itemtap: 'onItemTap'
            },

            mainBackButton: {
                tap: 'onMainBackButtonTap'
            }
        }
    },

    onMenuItemTap: function(menuNestedList, list, index, target, record) {
        menuNestedList.setDetailCard({
            xtype: 'menuitempanel',
            record: record
        });
    },

    onMenuBackButtonTap: function(menuNestedList, node, lastActiveList, detailCardActive) {
        if (node.getDepth() == 1) {
            this.getMainBackButton().show();
        }
    },

    onItemTap: function(menuNestedList, list, index, target, record) {
        if (!this.getMainBackButton().isHidden()) {
            this.getMainBackButton().hide();
        }
    },

    onMainBackButtonTap: function() {
        this.getMainNavigation().getNavigationBar().show();
        this.getMainNavigation().pop();
    }
});