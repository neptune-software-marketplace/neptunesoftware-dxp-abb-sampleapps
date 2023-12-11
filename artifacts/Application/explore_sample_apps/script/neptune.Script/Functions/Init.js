// Globals
var helper;
var layout;
var localViewID = this.getId();
var currentTitle, currentApp;

var filterObject;
// InitLoad
sap.ui.getCore().attachInit(function (data) {

    setTimeout(function () {

        if (sap.ui.Device.system.tablet && sap.ui.Device.os.name === "iOS") {
            if (window.innerHeight > window.innerWidth) {
                sap.ui.Device.orientation.landscape = false;
                sap.ui.Device.orientation.portrait = true;
            } else {
                sap.ui.Device.orientation.landscape = true;
                sap.ui.Device.orientation.portrait = false;
            }
        }

        if (typeof AppCache === "undefined") {
            butBackMaster.setVisible(false);
        }

        //Prepare Data
        fetchApps();

        // Initialize Layout helper
        InitButControl();

        jQuery.sap.require("sap.f.FlexibleColumnLayoutSemanticHelper");
        var oSettings = {
            defaultTwoColumnLayoutType: sap.f.LayoutType.TwoColumnsMidExpanded,
            defaultThreeColumnLayoutType: sap.f.LayoutType.ThreeColumnsMidExpanded
        };
        helper = new sap.f.FlexibleColumnLayoutSemanticHelper.getInstanceFor(oLayoutMain, oSettings);


        // Intial with Master Section only
        layout = helper.getNextUIState(0);
        oLayoutMain.setLayout(layout.layout);


    }, 200);
});

function fetchApps() {

    oBusyDialog.open();

    var options = {};

    apiAppTags(options);

}

if (sap.n) {
    sap.n.Shell.attachOnNavigation(function(data) {
        filterObject = data;
    
    });
}