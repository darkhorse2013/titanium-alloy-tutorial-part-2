exports.definition = {
    config: {
        columns: {
            name: "string",
            description: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "thing"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("thing", exports.definition, []);

collection = Alloy.C("thing", exports.definition, model);

exports.Model = model;

exports.Collection = collection;