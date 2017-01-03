/**
 * A DataItem is a container for {@link Ext.dataview.DataView} with useComponents: true. It ties together
 * {@link Ext.data.Model records} to its contained Components via a {@link #dataMap dataMap} configuration.
 *
 * For example, lets say you have a `text` configuration which, when applied, gets turned into an instance of an
 * Ext.Component. We want to update the {@link #html} of a sub-component when the 'text' field of the record gets
 * changed.
 *
 * As you can see below, it is simply a matter of setting the key of the object to be the getter of the config
 * (getText), and then give that property a value of an object, which then has 'setHtml' (the html setter) as the key,
 * and 'text' (the field name) as the value. You can continue this for a as many sub-components as you wish.
 *
 *     dataMap: {
 *         // When the record is updated, get the text configuration, and
 *         // call {@link #setHtml} with the 'text' field of the record.
 *         getText: {
 *             setHtml: 'text'
 *         },
 *
 *         // When the record is updated, get the userName configuration, and
 *         // call {@link #setHtml} with the 'from_user' field of the record.
 *         getUserName: {
 *             setHtml: 'from_user'
 *         },
 *
 *         // When the record is updated, get the avatar configuration, and
 *         // call `setSrc` with the 'profile_image_url' field of the record.
 *         getAvatar: {
 *             setSrc: 'profile_image_url'
 *         }
 *     }
 *
 *  @author : mzander
 *  @see : https://github.com/mzander/sencha-nested-dataitem
 */
Ext.define('Menum.util.dataview.component.NestedDataItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype : 'nesteddataitem',

    doMapData: function(dataMap, data, item) {
        var componentName, component, setterMap, setterName;

        for (componentName in dataMap) {
            setterMap = dataMap[componentName];
            component = this[componentName]();
            if (component) {
                for (setterName in setterMap) {
                    if (data) {
                        // Try to find nested elements (->)
                        var nestedNames = setterMap[setterName].split('->');
                        // If nestedNames contains more than one element iterate them
                        var intItemCount = nestedNames.length;
                        if (intItemCount > 1) {
                            var nestedValue = data;
                            for (var i = 0;  i < intItemCount; i++) {
                                nestedValue = nestedValue[nestedNames[i]];
                            }

                            component[setterName](nestedValue);
                        } else {

                            if (component[setterName] && data[setterMap[setterName]]) {
                                component[setterName](data[setterMap[setterName]]);
                            }
                        }
                    }
                }
            }
        }

        if (item) {
            // Bypassing setter because sometimes we pass the same object (different properties)
            item.updateData(data);
        }
    }
});