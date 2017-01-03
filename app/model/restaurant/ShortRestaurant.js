Ext.define('Menum.model.restaurant.ShortRestaurant', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'cuisine',
                type: 'string'
            },
            {
                name: 'distance',
                type: 'float'
            },
            {
                name: 'links'
            }
        ]
    }
});