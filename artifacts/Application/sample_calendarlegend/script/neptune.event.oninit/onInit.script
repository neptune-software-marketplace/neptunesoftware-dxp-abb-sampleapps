jQuery.sap.require("sap.ui.unified.DateTypeRange");

var oRefDate = new Date();

sap.ui.getCore().attachInit(function(data) {

    oCalendar.addSpecialDate(new sap.ui.unified.DateTypeRange({
        type: "Type10",
        startDate: new Date(oRefDate)
    }));

    oCalendar.addSpecialDate(new sap.ui.unified.DateTypeRange({
        type: "Type10",
        startDate: new Date(oRefDate.setDate(oRefDate.getDate() + 1))
    }));


    oCalendar.addSpecialDate(new sap.ui.unified.DateTypeRange({
        type: "Type02",
        startDate: new Date(oRefDate.setDate(oRefDate.getDate() + 2))
    }));
    setTimeout(function() {
        //  Do something
    }, 200);

});