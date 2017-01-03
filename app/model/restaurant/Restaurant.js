Ext.define('Menum.model.restaurant.Restaurant', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'description',
                type: 'string'
            },
            {
                name: 'address',
                type: 'string'
            },
            {
                name: 'cuisine',
                type: 'string'
            },
            {
                name: 'phoneNumber',
                type: 'string'
            },
            {
                name: 'open',
                type: 'boolean'
            },
            {
                name: 'openingDaysAndHours'
            },
            {
                name: 'hasImage',
                type: 'boolean'
            },
            {
                name: 'imageURL',
                type: 'string'
            },
            {
                name: 'links'
            }
        ]
    }
});