function prepareList() {

    modellistApps.setData({});
    modellistApps.refresh();
    
    for (i = 0; i < modelDataAppTags.oData.length; i++) {

        // get Tag Data from P9 Table
        var tag = modelDataAppTags.oData[i];

        // Get App Description from P9 App List
        var appData = ModelData.FindFirst(DataAppList, "application", tag.appl_id, "EQ");
        var sampleApp = {};
        if (appData) {
            sampleApp.application = appData.application;
            sampleApp.tags = tag.tags;
            sampleApp.description = appData.description;

            ModelData.Add(listApps, sampleApp);
        }

    }

    modellistApps.refresh();
    txtTitleMaster.setText(txtTranslateHeader.getText() + ' ('+ modellistApps.oData.length+')')

    oBusyDialog.close();

    navigateToDetail();
}