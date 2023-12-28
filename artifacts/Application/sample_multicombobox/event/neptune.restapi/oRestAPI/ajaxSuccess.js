var result = xhr.responseJSON;

modeloMultiComboBox.setData(result.slice(0, 100));
modeloMultiComboBox1.setData(result.slice(0, 100));