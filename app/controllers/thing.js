// create a variable to reference our collection
var things = Alloy.Collections.thing; 

// our data object it's really simple, it has only one thing 
var data = {
  "name": "Pencil", 
  "description": "You use a pencil to write things down"
}

// This is our model
// we pass data to our model "thing"
var thing = Alloy.createModel("thing", data);

// Add the "thing" model to the "things" collection
things.add(thing);

// Save our model to the SQL database
// thing.save(thing);

// Finally, fetch the collection items
things.fetch();

$.tableview.addEventListener("click", function(e) {
  var send = things.get(e.rowData.model);
  var detailWindow = Alloy.createController("detailWindow", {
    data: send,
    "$model": send 
  });
  detailWindow.getView().open();
});
