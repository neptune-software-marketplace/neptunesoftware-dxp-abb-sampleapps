function mapData() {

    if (modelDataTags.oData.length < 1) return;
    // if (coreObjectList.length < 1) return;
    if (modelDataObjectList.oData.length < 1) return;

    var objects = [];
    for (i = 0; i < modelDataObjectList.oData.length; i++) {

        var UIElem = modelDataObjectList.oData[i];
        var newObject;
        var tagFound = ModelData.Find(DataTags, "tags", UIElem.FIELD_NAME, "Contains");

        if (tagFound.length > 0) {
            if (UIElem.LIBRARY !== "") {
                objects.push(UIElem);

            }

        }

    }

    modellistObject.setData(objects);
    setCachelistObject();
    txtTitleMaster.setText(txtTranslateHeader.getText() + " (" + modellistObject.oData.length + ")")

   sortListObjects();

    if (mode === "APP_DESIGNER") {
        var UIElem = ModelData.FindFirst(DataObjectList, "UI5_ID", objectUI, "EQ");

        if (UIElem) {
            getElementDetails(UIElem);
        }
    }

    oBusyDialog.close();
    
}

function getElementDetails(UIElem) {


    if (modelDataApps.oData.length < 1) return;

    var library = "";
    switch (UIElem.LIBRARY) {
        case 'sap.m':
            library = "sapm";
            break;

        case 'sap.f':
            library = "sapf";
            break;

        case 'sap.ui.core':
            library = "uicore";
            break;

        case 'sap.ui.layout':
            library = "sapuilayout";
            break;
        
        case 'sap.ui.core.dnd':
            library = "dnd";
            break;

        case 'sap.ui.table':
            library = "uitable";
            break;

        case 'neptune.event':
            library = "nevent";
            break;

        case 'sap.ui.unified':
            library = "uiunified";
            break;

        case 'sap.uxap':
            library = "uxap";
            break;

        case 'sap.tnt':
            library = "tnt";
            break;

        case 'neptune':
            library = "neptune";
            break;

        case 'neptune.chart':
            library = "highchart";
            break;

        case 'sap.ui.model':
            library = "odata";
            break;

        default:
            library = "neptune";
            break;
        // code
    }

    var tagFound = ModelData.Find(DataTags, ["tags", "library"], [UIElem.FIELD_NAME, library], ["Contains", "Contains"]);
    var sampleApps = [];
    for (i = 0; i < tagFound.length; i++) {
        var app = ModelData.FindFirst(DataApps, "application", tagFound[i].appl_id, "EQ");

        if (app) {
            sampleApps.push(app);
        }
    }

    modellistSampleApps.setData(sampleApps);
    modelPageDetails.setData(UIElem);

    var UIdescr = "No Description";
    if (UIElem.ABOUT) {
        UIdescr = UIElem.ABOUT;
    }
    htmlAbout.setDOMContent("");
    htmlAbout.setDOMContent("<div>" + UIdescr + "</div>");

    var dataPropertiesP = ModelData.Find(DataAttributes, ["UI5_ID", "G"], [UIElem.UI5_ID, "Properties"], ["EQ", "EQ"]);
    var dataPropertiesA = ModelData.Find(DataAttributes, ["UI5_ID", "G"], [UIElem.UI5_ID, "Accessibility"], ["EQ", "EQ"]);
    ModelData.AddArray(dataPropertiesP, dataPropertiesA);
    var dataPropertiesF = ModelData.Find(DataAttributes, ["UI5_ID", "G"], [UIElem.UI5_ID, "FormatOptions"], ["EQ", "EQ"]);
    ModelData.AddArray(dataPropertiesP, dataPropertiesF);
    modellistUIProperty.setData(JSON.parse(JSON.stringify(dataPropertiesP)));

    var oSorter1 = new sap.ui.model.Sorter("G", false, true);
    var oSorter2 = new sap.ui.model.Sorter("A", false, false);
    var binding = listUIProperty.getBinding("items");
    binding.sort([oSorter1, oSorter2]);

    var dataModel = ModelData.Find(DataAttributes, ["UI5_ID", "G"], [UIElem.UI5_ID, "Model"], ["EQ", "EQ"]);
    modellistUIModel.setData(JSON.parse(JSON.stringify(dataModel)));

    var dataEvent = ModelData.Find(DataAttributes, ["UI5_ID", "G"], [UIElem.UI5_ID, "Events"], ["EQ", "EQ"]);
    modellistUIEvent.setData(JSON.parse(JSON.stringify(dataEvent)));

    var dataFormatter = ModelData.Find(DataAttributes, ["UI5_ID", "G"], [UIElem.UI5_ID, "Formatter"], ["EQ", "EQ"]);
    modellistUIFormatter.setData(JSON.parse(JSON.stringify(dataFormatter)));

    oLayoutMain.to(localViewID+'--PageDetails');
    
    navigateToDetail();
}