function Controller() {
    function __alloyId9() {
        var models = __alloyId8.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId4 = models[i];
            __alloyId4.__transform = {};
            var __alloyId5 = Ti.UI.createTableViewRow({
                width: "100%",
                height: "25px",
                dataId: "",
                model: "undefined" != typeof __alloyId4.__transform["alloy_id"] ? __alloyId4.__transform["alloy_id"] : __alloyId4.get("alloy_id")
            });
            rows.push(__alloyId5);
            var __alloyId7 = Ti.UI.createLabel({
                top: "5px",
                left: "10px",
                color: "#000",
                text: "undefined" != typeof __alloyId4.__transform["name"] ? __alloyId4.__transform["name"] : __alloyId4.get("name")
            });
            __alloyId5.add(__alloyId7);
        }
        $.__views.tableview.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.thingsWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "thingsWindow"
    });
    $.__views.thingsWindow && $.addTopLevelView($.__views.thingsWindow);
    $.__views.tableview = Ti.UI.createTableView({
        id: "tableview"
    });
    $.__views.thingsWindow.add($.__views.tableview);
    var __alloyId8 = Alloy.Collections["thing"] || thing;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    exports.destroy = function() {
        __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
    };
    _.extend($, $.__views);
    var things = Alloy.Collections.thing;
    var data = {
        name: "Pencil",
        description: "You use a pencil to write things down"
    };
    var thing = Alloy.createModel("thing", data);
    things.add(thing);
    things.fetch();
    $.tableview.addEventListener("click", function(e) {
        var send = things.get(e.rowData.model);
        var detailWindow = Alloy.createController("detailWindow", {
            data: send,
            $model: send
        });
        detailWindow.getView().open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;