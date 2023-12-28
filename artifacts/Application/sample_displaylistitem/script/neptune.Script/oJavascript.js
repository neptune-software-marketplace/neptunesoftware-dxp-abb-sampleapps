
// adding table data

function addData() {
    var sample_data = [
        { name: "John Doe", role: "Department Manager" },
        { name: "Mary Don", role: "Developer" },
        { name: "Jamie Maxwel", role: "Marketing Manager" },
        { name: "Peterson Klar", role: "Social Media Lead" },
        { name: "Priti Iyan", role: "QA Manager" },
    ];

    modelList.setData(sample_data);
}

// Custom Init - Happens only once
sap.ui.getCore().attachInit(function (data) {
    setTimeout(function () {
        addData();
    }, 200);
});
