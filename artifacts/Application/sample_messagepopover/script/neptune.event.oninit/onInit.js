
sap.ui.getCore().attachInit(function(data) {
    var sErrorDescription = 'First Error message description. \n';

    var aMockMessages = [{
        type: 'Error',
        title: 'Error message',
        description: 'Message Description',
        subtitle: 'Example of subtitle',
        counter: 1
    }, {
        type: 'Warning',
        title: 'Warning without description',
        description: 'Message Description1',
        subtitle: 'Example of subtitle'
    }, {
        type: 'Success',
        title: 'Success message',
        description: 'First Success message description',
        subtitle: 'Example of subtitle',
        counter: 1
    }, {
        type: 'Error',
        title: 'Error message',
        description: 'Second Error message description',
        subtitle: 'Example of subtitle',
        counter: 2
    }, {
        type: 'Information',
        title: 'Information message',
        description: 'First Information message description',
        subtitle: 'Example of subtitle',
        counter: 1
    }];
    
   modeloMessagePopover.setData(aMockMessages);
});