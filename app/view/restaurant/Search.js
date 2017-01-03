Ext.define('Menum.view.restaurant.Search', {
    extend: 'Ext.form.Panel',
    xtype: 'restaurantsearchform',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select'
    ],

    config: {
        locales: {
            title: 'restaurantsearchform.title'
        },
        title: '', // needed for i18n
        cls : 'restaurant-search',

        items: [
            // Location fieldSet
            {
                xtype: 'fieldset',
                locales: {
                    title: 'restaurantsearchform.locationFieldset.title'
                },
                items: [
                    {
                        xtype: 'checkboxfield',
                        itemId: 'geolocationCheckboxfield',
                        locales: {
                            label: 'restaurantsearchform.locationFieldset.geolocationCheckboxfield.label'
                        },
                        checked: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'geocodingTextfield',
                        locales: {
                            label: 'restaurantsearchform.locationFieldset.geocodingTextfield.label'
                        },
                        disabled: true
                    },
                    {
                        xtype: 'selectfield',
                        itemId: 'radiusSelectfield',
                        locales: {
                            label: 'restaurantsearchform.locationFieldset.radiusSelectfield.label'
                        },
                        options: Menum.util.Config.getRestaurantSearchRadius(),
                        usePicker: false
                    }
                ]
            },
            // Cuisine fieldset
            {
                xtype: 'fieldset',
                locales: {
                    title: 'restaurantsearchform.cuisineFieldset.title'
                },
                items: [
                    {
                        xtype: 'selectfield',
                        itemId: 'cuisineSelectfield',
                        locales: {
                            label: 'restaurantsearchform.cuisineFieldset.cuisineSelectfield.label',
                            options: Menum.util.Config.getCuisines()
                        },
                        usePicker: false
                    }
                ]
            },
            // Search button
            {
                xtype: 'button',
                itemId: 'searchButton',
                locales: {
                    text: 'restaurantsearchform.searchButton.text'
                },
                ui: 'confirm-round',
                cls: 'submit-button'
            }
        ]
    }
});