function doClick(e) {  
    alert($.label.text);
}

// $.index.open();

var thingWindow = new Alloy.createController("thing").getView();
thingWindow.open();
