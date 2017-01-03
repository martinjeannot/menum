Ext.define('Menum.util.field.TravelModeSelect', {
    extend: 'Ext.field.Select',
    xtype: 'travelmodeselectfield',
    requires: [
        'Ext.Img'
    ],

    config: {
        baseCls: 'travel-mode-select',
        options: Menum.util.Config.getTravelModes(),
        usePicker: false,

        listeners: {
            change: function(selectField, newValue, oldValue) {
                var travelIconId = selectField.getItemId() + '-icon';
                var travelIcon = Ext.create('Ext.Img', {
                    itemId: travelIconId,
                    src: 'resources/images/' + newValue + '_icon_48x48.png',
                    height: 48,
                    //width: 48,
                    cls: 'travel-mode-icon'
                });

                if (selectField.getComponent(travelIconId) != null) {
                    var container = selectField.getComponent(travelIconId);
                    var oldTravelIcon = container.element.query('*[class~="x-img"]')[0];
                    container.element.dom.replaceChild(travelIcon.element.dom, oldTravelIcon);
                }

                return this;
            },

            painted: function(element) {
                var selectField = Ext.getCmp(element.getId());
                var travelIconId = selectField.getItemId() + '-icon';
                var travelIcon = Ext.create('Ext.Img', {
                    itemId: travelIconId,
                    src: 'resources/images/' + selectField.getValue() + '_icon_48x48.png',
                    height: 48,
                    //width: 48,
                    cls: 'travel-mode-icon'
                });

                if (element.query('input')[0] != null) {
                    var textField = element.query('input')[0];
                    textField.parentNode.replaceChild(travelIcon.element.dom, textField);
                }

                return this;
            }
        }
    },

    // @private
    getTabletPicker: function() {
        var me = this,
            config = me.getDefaultTabletPickerConfig();

        if (!me.listPanel) {
            me.listPanel = Ext.create('Ext.Panel', Ext.apply({
                left: 0,
                top: 0,
                modal: true,
                cls: Ext.baseCSSPrefix + 'select-overlay',
                layout: 'fit',
                hideOnMaskTap: true,
                width: Ext.os.is.Phone ? '14em' : '18em',
                height: (Ext.os.is.BlackBerry && Ext.os.version.getMajor() === 10) ? '12em' : (Ext.os.is.Phone ? '12.5em' : '22em'),
                items: {
                    xtype: 'list',
                    store: me.getStore(),
                    itemTpl: '<img class="travel-mode-icon" src={' + me.getDisplayField() + ':htmlEncode} />',
                    listeners: {
                        select: me.onListSelect,
                        itemtap: me.onListTap,
                        scope: me
                    }
                }
            }, config));
        }

        return me.listPanel;
    }
});