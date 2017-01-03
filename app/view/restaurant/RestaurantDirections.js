Ext.define('Menum.view.restaurant.RestaurantDirections', {
    extend: 'Ext.Map',
    xtype: 'restaurantdirections',

    config: {
        listeners: {
            painted: function() {
                // set title
                Menum.app.getController('Menum.controller.MainNavigation').getMainNavigation().getNavigationBar().setTitle(
                    this.getRecord().get('name'));
            }
        }
    }
});