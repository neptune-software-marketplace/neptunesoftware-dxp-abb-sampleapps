var butControl = {};
var modelAppMenuOptions = new sap.ui.model.json.JSONModel();
sap.ui.getCore().setModel(modelAppMenuOptions, "AppMenuOptions");

var modelDataAttributes = new sap.ui.model.json.JSONModel();
sap.ui.getCore().setModel(modelDataAttributes, "DataAttributes");

var modelDataProperties = new sap.ui.model.json.JSONModel();
sap.ui.getCore().setModel(modelDataProperties, "DataProperties");

var modelDataEvents = new sap.ui.model.json.JSONModel();
sap.ui.getCore().setModel(modelDataEvents, "DataEvents");

var modelDataModel = new sap.ui.model.json.JSONModel();
sap.ui.getCore().setModel(modelDataModel, "DataModel");

var modelDataFormatters = new sap.ui.model.json.JSONModel();
sap.ui.getCore().setModel(modelDataFormatters, "DataFormatters");

var modelDataObjectList = new sap.ui.model.json.JSONModel();
sap.ui.getCore().setModel(modelDataFormatters, "DataObjectList");

function InitButControl() {
    AppMenuOptions.setModel(modelAppMenuOptions);
    butControl.closeDetail = true;
    butControl.fullScreen = true;
    butControl.exitFullScreen = false;

    butControl.closeDetailDetail = true;
    butControl.fullScreenDetailDetail = true;
    butControl.exitFullScreenDetailDetail = false;

    modelAppMenuOptions.setData(butControl);

}

function InitModels(){
    DataAttributes.setModel(modelDataAttributes);
    DataProperties.setModel(modelDataProperties);
    DataEvents.setModel(modelDataEvents);
    DataModel.setModel(modelDataModel);
    DataObjectList.setModel(modelDataObjectList);
    DataFormatters.setModel(modelDataFormatters);
}
