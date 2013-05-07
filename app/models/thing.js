exports.definition = {
	config: {
		columns: {
		    "name": "string",
		    "description": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "thing"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		
		return Collection;
	}
}

