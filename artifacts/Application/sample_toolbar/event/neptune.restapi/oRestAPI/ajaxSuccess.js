var result = xhr.responseJSON;

modeloTable.setData(result.slice(0, 100));
modeloTable1.setData(result.slice(0, 100));
modeloList.setData(result.slice(0, 100));