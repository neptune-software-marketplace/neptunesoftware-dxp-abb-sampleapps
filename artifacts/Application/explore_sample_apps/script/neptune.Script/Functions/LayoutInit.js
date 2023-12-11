var butControl = {};
var modelAppMenuOptions = new sap.ui.model.json.JSONModel();
sap.ui.getCore().setModel(modelAppMenuOptions, "AppMenuOptions");

function InitButControl(){
    AppMenuOptions.setModel(modelAppMenuOptions);
    butControl.closeDetail = true;
    butControl.fullScreen = true;
    butControl.exitFullScreen = false;

    butControl.closeDetailDetail = true;
    butControl.fullScreenDetailDetail = true;
    butControl.exitFullScreenDetailDetail = false;

    modelAppMenuOptions.setData(butControl);

    modelAppMenuOptions.refresh();
}
