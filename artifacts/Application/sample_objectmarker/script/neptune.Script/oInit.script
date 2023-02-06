// adding table data

function addData(){
    var tableData = [
         	    { product: "Power Projector 1234", type: "Locked" },
				{ product: "Power Projector 1224", type: "LockedBy", additionalInfo: "John Doe" },
				{ product: "Power Projector 1244", type: "LockedBy", additionalInfo: "John Doe"  },
				{ product: "Gladiator MX 2134", type: "Draft" },
				{ product: "Hurricane GX 5648", type: "Unsaved" },
				{ product: "Hurricane GX 5658", type: "UnsavedBy", additionalInfo: "John Doe" },
				{ product: "Hurricane GX 5668", type: "UnsavedBy" , additionalInfo: "John Doe" },
				{ product: "Hurricane GX 5678", type: "Unsaved" },
				{ product: "Webcam", type: "Favorite" },
				{ product: "Deskjet Super Highspeed", type: "Flagged" }
];

modeloTable.setData(tableData);

}


// Custom Init - Happens only once
sap.ui.getCore().attachInit(function(data) {

    setTimeout(function() {
        addData();
    }, 200);

});