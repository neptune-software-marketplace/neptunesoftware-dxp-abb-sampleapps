// Custom Init - Happens only once
sap.ui.getCore().attachInit(function(data) {

    var oListItems = [{
        title : "Red",
        intro : "Colors",
        number: "10"
    },
    {
        title : "Green",
        intro : "Colors",
        number: "20"
    }];
  modeloList1.setData(oListItems);  
modeloList.setData(oListItems);
    // Some stuff needs to be timed later. Run them inside a timeout
    setTimeout(function() {
        //  Do something
    }, 200);

});