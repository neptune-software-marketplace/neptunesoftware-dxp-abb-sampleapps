// adding table data

function addData(){
    var tableData = [
         	    { product: "Power Projector 1234", Dimensions: "16 x 19.5 x 29 cm", weight:"0.84 KG", state :"Error"},
				{ product: "Power Projector 1224", Dimensions: "8 x 6 x 1.5 cm", weight:"0.44 KG", state :"None"},
				{ product: "Power Projector 1244", Dimensions: "14 x 19.5 x 29 cm", weight:"0.64 KG",  state :"Success" },
				{ product: "Gladiator MX 2134", Dimensions: "30.4 x 23.1 x 23 cm", weight:"1.0 KG", state :"Warning"},
				{ product: "Hurricane GX 5648", Dimensions: "30.4 x 23.1 x 23 cm", weight:"0.84 KG", state :"Error"},
				{ product: "Hurricane GX 5658", Dimensions: "24 x 19.5 x 29 cm", weight:"1.84 KG", state :"None"},
				{ product: "Hurricane GX 5668", Dimensions: "24 x 19.5 x 29 cm", weight:"1.14 KG", state :"Success"},
				{ product: "Hurricane GX 5678", Dimensions: "24 x 19.5 x 29 cm", weight:"2.84 KG", state :"Warning"},
				{ product: "Webcam", Dimensions: "4 x 9.5 x 9 cm", weight:"0.84 KG", state :"Error"},
				{ product: "Deskjet Super Highspeed", Dimensions: "24 x 9.5 x 19 cm", weight:"1.24 KG", state :"Success"}
];

modeloTable.setData(tableData);

}


// Custom Init - Happens only once
sap.ui.getCore().attachInit(function(data) {

    setTimeout(function() {
        addData();
    }, 200);

});