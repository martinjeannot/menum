Ext.define('Menum.util.GeolocationManager', {
    singleton: true,

    config: {
        position: null,
        currentIntervalId: null,
        currentIntervalCount: 0
    },

    /**
     * Needed to initialize config values
     *
     * @param config
     */
    constructor: function(config) {
        config = config || {
            position: null,
            currentIntervalId: null,
            currentIntervalCount: 0
        };

        this.initConfig(config);
    },

    refreshPosition: function() {
        var me = this;

        // DEBUG
        /*me.setPosition({
            coords: {
                latitude: 48.80,
                longitude: 2.18,
                accuracy: 31
            }
        });*/

        // refresh position with high accuracy
        Ext.device.Geolocation.getCurrentPosition({
            success: function(position) {
                me.setPosition(position);
            },

            enableHighAccuracy: true,
            timeout: 60000,
            maximumAge: 60000
        });

        // refresh position without high accuracy
        Ext.device.Geolocation.getCurrentPosition({
            success: function(position) {
                if (!me.getPosition()
                    || (me.getPosition().coords.accuracy + 50) > position.coords.accuracy) {
                    me.setPosition(position);
                }
            },

            enableHighAccuracy: false,
            timeout: 60000,
            maximumAge: 60000
        });
    },

    getCurrentPosition: function(callback) {
        var me = this;

        if (me.getPosition()) { // if a position is available, send it
            callback(me.getPosition());
        } else { // else wait for it
            var currentIntervalId = setInterval(function() {
                me.setCurrentIntervalCount(me.getCurrentIntervalCount() + 1);
                if (me.getPosition()) {
                    me.resetCurrentInterval();
                    callback(me.getPosition());
                }
                if (me.getCurrentIntervalCount() > 20) {
                    me.resetCurrentInterval();
                    callback(null); // couldn't find a position within 60 sec
                }
            }, 3000);

            me.setCurrentIntervalId(currentIntervalId);
        }

        // refresh position (this could be done somewhere else...)
        me.refreshPosition();
    },

    resetCurrentInterval: function() {
        this.setCurrentIntervalId(null);
    },

    applyCurrentIntervalId: function(currentIntervalId) {
        var me = this;

        if (me.getCurrentIntervalId()) {
            clearInterval(me.getCurrentIntervalId());
        }
        me.setCurrentIntervalCount(0);

        return currentIntervalId;
    }
});