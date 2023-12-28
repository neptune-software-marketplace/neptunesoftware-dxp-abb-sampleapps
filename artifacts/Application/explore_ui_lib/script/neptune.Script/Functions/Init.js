// Globals
var helper;
var layout;
var dataSet = "WEBIDE";
var currentTitle, currentApp;
var mode = "EXPLORED";
var objectUI;
var localViewID = this.getId();

// InitLoad
sap.ui.getCore().attachInit(function() {
    oBusyDialog.open();
    
    setTimeout(function() {

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

        InitModels();
        // Initialize Layout helper
        InitButControl();
        jQuery.sap.require("sap.f.FlexibleColumnLayoutSemanticHelper");
        var oSettings = {
            defaultTwoColumnLayoutType: sap.f.LayoutType.TwoColumnsMidExpanded,
            defaultThreeColumnLayoutType: sap.f.LayoutType.ThreeColumnsMidExpanded
        };
        helper = new sap.f.FlexibleColumnLayoutSemanticHelper.getInstanceFor(oLayoutMain, oSettings);


        // Intial with Master Section only
        layout = helper.getNextUIState(1);
        oLayoutMain.setLayout(layout.layout);

        apiGetUILib({});

        // init();


    }, 200);
});

function init() {
    
    // var urlBase = location.origin;
    // var urlFunction = urlBase + "/api/functions/" + dataSet + "/" + 'Init';
    // oBusyDialog.open();
    // $.ajax({
    //     type: "POST",
    //     contentType: "application/json",
    //     url: urlFunction,
    //     headers: {},
    //     success: function(data) {
    //         oBusyDialog.close();

    //         // coreObjectList = data.libobjects;
    //         modelDataObjectList.setData(data.libobjects);
    //         modelDataAttributes.setData(data.libattributes);
    //         modelDataAttributes.refresh();
    //         modelDataObjectList.refresh();

    //         oBusyDialog.open();

    //         apiGetTags({});
    //         apiGetApps({});

    //     },
    //     error: function(result, status) {

    //         if (result.status === 401) {

    //             // nwd.Utils.message({
    //             //     title: 'Session Expired',
    //             //     intro: 'Confirmation needed',
    //             //     text1: 'Session have expired. Would you like to reload the page and logon ? ',
    //             //     state: 'Information',
    //             //     acceptText: 'Yes, reload!',
    //             //     onAccept: function () {
    //             //         location.reload();
    //             //     }
    //             // });

    //         }

    //         // if (options.error) options.error(result);

    //     }
    // });
    
    apiGetUILib({});
}

// Only for View - Custom onNavigation - Trigger when hash navigation is used
if (sap.n) {
    sap.n.Shell.attachOnNavigation(function(data) {
        if (data) {
            if (data.object) {
                mode = "APP_DESIGNER";
                objectUI = data.object
               
            }
        }
    });
}


function sortListObjects(){
 var oSorter1 = new sap.ui.model.Sorter("LIBRARY", false, true);
    var oSorter2 = new sap.ui.model.Sorter("FIELD_NAME", false, false);
    var binding = listObject.getBinding("items");
    binding.sort([oSorter1, oSorter2]);
}