// onBackButtonCustom event handler. This event handler will be erased when the app is suppended.
// So define the event handler in attachBeforeDisplay
if (sap.n) {
    sap.n.Shell.attachBeforeDisplay(function(data, init) {
        sap.n.Phonegap.onBackButtonCustom = function() {
            if (sap.ui.Device.system.phone) {
                
                switch (currPage) {
                    case 'begin':
                        AppCache.Back();
                        break;

                    case 'mid':
                        butCloseDetail.firePress();
                        break;

                    case 'end':
                        butCloseDetailDetail.firePress();
                        break;
                    default:
                        AppCache.Back();
                }

            }
        };
    });
}


// // onOnlineCustom event handler. This event handler will be erased when the app is suppended.
// // So define the event handler in attachBeforeDisplay
// if (sap.n) {
//     sap.n.Shell.attachBeforeDisplay(function(data, init) {
//         sap.n.Phonegap.onOnlineCustom = function() {

//         };
//     });
// }



// // onOfflineCustom event handler. This event handler will be erased when the app is suppended.
// // So define the event handler in attachBeforeDisplay
// if (sap.n) {
//     sap.n.Shell.attachBeforeDisplay(function(data, init) {
//         sap.n.Phonegap.onOfflineCustom = function() {

//         };
//     });
// }

// // onResumeCustom event handler. This event handler will be erased when the app is suppended.
// // So define the event handler in attachBeforeDisplay
// if (sap.n) {
//     sap.n.Shell.attachBeforeDisplay(function(data, init) {
//         sap.n.Phonegap.onResumeCustom = function() {

//         };
//     });
// }


// // onPauseCustom event handler. This event handler will be erased when the app is suppended.
// // So define the event handler in attachBeforeDisplay
// if (sap.n) {
//     sap.n.Shell.attachBeforeDisplay(function(data, init) {
//         sap.n.Phonegap.onPauseCustom = function() {

//         };
//     });
// }
