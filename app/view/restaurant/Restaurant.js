Ext.define('Menum.view.restaurant.Restaurant', {
    extend: 'Ext.Panel',
    xtype: 'restaurantpanel',
    requires: [
        'Menum.util.field.TravelModeSelect'
    ],

    config: {
        scrollable: 'vertical'
    },

    initialize: function() {
        var me = this,
            restaurant = me.getRecord();

        //========================================
        //~ Dynamic Restaurant view construction =
        //========================================

        me.add(Ext.create('Ext.Panel', {

            cls: 'restaurant',

            items: [
                // Restaurant Details container
                {
                    xtype: 'container',
                    cls: 'default-container',

                    items: [
                        {
                            xtype: 'container',
                            html: restaurant.get('name'),
                            cls: 'name'
                        },
                        {
                            xtype: 'container',
                            html: 'Cuisine : ' + restaurant.get('cuisine')
                        },
                        {
                            xtype: 'image',
                            src: restaurant.get('hasImage') ?
                                restaurant.get('imageURL') :
                                'resources/images/image_not_found.jpeg',
                            flex: 1,
                            cls: 'image'
                        },
                        {
                            xtype: 'container',
                            html: '&#x260E;&nbsp;<a href="tel:' + restaurant.get('phoneNumber') + '">' +
                                restaurant.get('phoneNumber') + '</a>',
                            hidden: restaurant.get('phoneNumber').length < 8
                        },
                        {
                            xtype: 'container',
                            locales: {
                                html: restaurant.get('open') ? 'restaurantpanel.open' : 'restaurantpanel.closed'
                            },
                            cls: restaurant.get('open') ? 'open' : 'closed'
                        },
                        {
                            xtype: 'button',
                            itemId: 'openingDaysAndHoursButton',
                            locales: {
                                text: 'restaurantpanel.openingDaysAndHoursButton.text'
                            },
                            layout: 'fit',
                            ui: 'action-round',
                            cls: 'opening-days-and-hours-button'
                        },
                        {
                            xtype: 'container',
                            html: restaurant.get('description'),
                            cls: 'description'
                        },
                        {
                            xtype: 'button',
                            itemId: 'menuButton',
                            locales: {
                                text: 'restaurantpanel.menuButton.text'
                            },
                            ui: 'action-round',
                            cls: 'last-element menu-button'
                        }
                    ]
                },
                // Directions container
                {
                    xtype: 'container',
                    cls: 'default-container',

                    items: [
                        {
                            xtype: 'container',
                            html: restaurant.get('address'),
                            cls: 'address'
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            cls: 'last-element',

                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'directionsButton',
                                    locales: {
                                        text: "restaurantpanel.directionsButton.text"
                                    },
                                    flex: 3,
                                    ui: 'action-round',
                                    cls: 'directions-button'
                                },
                                {
                                    xtype: 'travelmodeselectfield',
                                    itemId: 'travelModeSelectfield',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        }));

        // Opening days and hours
        var openingDaysAndHoursCloseButton = Ext.create('Ext.Button', {
            iconCls: 'delete',
            ui: 'decline',
            style: 'margin-left: 5px',

            // This should be in the restaurant controller but unfortunately, the itemId config doesn't seem to work
            // here (perhaps it has something to do with the fact that we are rendering the component manually...)
            listeners: {
                tap: function() {
                    var restaurantController = Menum.app.getController('Menum.controller.restaurant.Restaurant');
                    restaurantController.getOpeningDaysAndHoursModal().hide();
                }
            }
        });
        var openingDaysAndHoursTable = '<table>' +
            '<tr>' +
            '<th>' + openingDaysAndHoursCloseButton.element.dom.outerHTML + '</th>' +
            '<th>' + Ux.locale.Manager.get('restaurantpanel.openingDaysAndHoursTable.lunch') + '</th>' +
            '<th>' + Ux.locale.Manager.get('restaurantpanel.openingDaysAndHoursTable.dinner') + '</th>' +
            '</tr>';
        for (var i = 0; i < 7; i++) {
            openingDaysAndHoursTable = openingDaysAndHoursTable + '<tr><td>' +
                Ux.locale.Manager.get('config.day.' + i) + '</td><td>' +
                restaurant.get('openingDaysAndHours')[i * 2] + '</td><td>' +
                restaurant.get('openingDaysAndHours')[i * 2 + 1] + '</td></tr>';
        }
        openingDaysAndHoursTable = openingDaysAndHoursTable + '</table>';

        me.add({
            xtype: 'panel',
            itemId: 'openingDaysAndHoursModal',
            cls: 'restaurant',
            html: openingDaysAndHoursTable,
            styleHtmlContent: true,
            styleHtmlCls: 'opening-days-and-hours-table',
            centered: true,
            modal: true,
            hideOnMaskTap: true,
            hidden: true
        });

        me.callParent(arguments);
    }
});