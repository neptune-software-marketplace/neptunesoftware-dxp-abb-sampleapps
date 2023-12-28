// popSampleAction.close();
// var url = 'https://template.neptune-software.com/neptune/sdk/explored_preview?key=' + currentApp;
// diaRun = window.open(url, "RunWrapper", "width=1200, height=850,location=false,left=100,top=50").focus();

var appObj = {
    'applid': currentApp
}

 var url = location.href + '&' + encodeURIComponent(JSON.stringify(appObj));

// txtShareLink.setValue(url);
// diaShareLink.open();


navigator.clipboard.writeText(url);

sap.m.MessageToast.show('Link copied to Clipboard');