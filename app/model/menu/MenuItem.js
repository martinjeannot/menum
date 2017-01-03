Ext.define('Menum.model.menu.MenuItem', {
    extend: 'Ext.data.Model',
    mixins: {
        node: 'Ext.data.NodeInterface'
    },

    config: {
        fields: [
            {
                name: 'leaf',
                type: 'boolean',
                defaultValue: false
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'amount',
                type: 'float'
            },
            {
                name: 'currency',
                type: 'string'
            },
            {
                name: 'description',
                type: 'string'
            },
            {
                name: 'hasImage',
                type: 'boolean'
            },
            {
                name: 'imageURL',
                type: 'string'
            }
        ]
    }
});