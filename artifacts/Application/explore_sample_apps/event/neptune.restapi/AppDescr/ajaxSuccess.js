prepareList();

if(filterObject !== null && filterObject.hasOwnProperty('applid')){
    oSearchField.setValue(filterObject.applid);
    oSearchField.fireSearch();
}