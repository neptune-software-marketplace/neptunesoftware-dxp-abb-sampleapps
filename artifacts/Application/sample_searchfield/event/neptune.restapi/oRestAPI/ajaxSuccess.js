var result = xhr.responseJSON;

modeloTable.setData(result.slice(0, 100));