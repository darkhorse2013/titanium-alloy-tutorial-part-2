function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.detailWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "detailWindow"
    });
    $.__views.detailWindow && $.addTopLevelView($.__views.detailWindow);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.detailWindow.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        top: "10px",
        left: "10px",
        font: {
            fontSize: "24px"
        },
        color: "#000",
        text: "undefined" != typeof $model.__transform["name"] ? $model.__transform["name"] : $model.get("name"),
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        top: "38px",
        left: "10px",
        font: {
            fontSize: "18px"
        },
        color: "#666",
        text: "undefined" != typeof $model.__transform["description"] ? $model.__transform["description"] : $model.get("description"),
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    alert(args.$model.attributes.name);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;