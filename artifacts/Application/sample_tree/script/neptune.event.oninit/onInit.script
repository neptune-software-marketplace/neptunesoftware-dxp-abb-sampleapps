buildTree();

checkFor(oToolPage.sId + "-aside");

function checkFor(id) {
    var elem = document.getElementById(id);
    if (elem) {
        oPageMenu.placeAt(elem);
    } else {
        setTimeout(function() {
            checkFor(id);
        }, 10);
    }
} 