Ext.define('Menum.view.restaurant.SearchResultList', {
    extend: 'Ext.dataview.List',
    xtype: 'restaurantsearchresultlist',

    config: {
        title: 'Restaurants',

        store: 'restaurantsStore',

        itemCls: 'restaurant-search-result',
        itemTpl: new Ext.XTemplate(
            '<span class="name">{name}</span>',
            '<span class="cuisine">{cuisine}</span>',
            '<div class="distance">{[this.formatDistance(values.distance)]}</div>',
            {
                formatDistance: function(distance) {
                    if (typeof distance === 'number') {
                        if (distance < 1) {
                            return Math.round(distance * 1000) + ' m';
                        } else {
                            return Math.floor(distance * 10) / 10 + ' km';
                        }
                    } else {
                        return distance;
                    }
                }
            }
        )
    }
});