var result = xhr.responseJSON;
modeloCustomerTable.setData(result.slice(0, 100));
modeloTableSelectDialog.setData(result.slice(0, 100));
