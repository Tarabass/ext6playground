Ext.define('FormPanel', {
	override: 'Ext.form.Panel',

	updateRecord: function(newRecord) {
        var fields, values, name;

        if (newRecord && (fields = newRecord.fields)) {
            values = this.getValues();
            for (name in values) {
            	//console.log(fields.containsKey(name));
                if(values.hasOwnProperty(name)) {
                //if (values.hasOwnProperty(name) && fields.containsKey(name)) {
                    newRecord.set(name, values[name]);
                }
            }
        }
        return this;
    }

});