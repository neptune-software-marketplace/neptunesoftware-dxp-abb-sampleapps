var result = xhr.responseJSON;
modeloSelect.setData(result.slice(0, 100));
modeloSelect1.setData(result.slice(0, 100));