// oBusyDialog.close();
// oBusyDialog.open();

if (xhr.responseJSON.length !== 0) {
    modelDataApps.setData(xhr.responseJSON);
}

apiGetTags({});
