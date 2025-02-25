var data = new Date();
var dia = data.getDate();
var mes = data.getMonth() + 1;
mes = mes < 10 ? '0' + mes : mes;
var senha = 2011 + parseInt(dia.toString() + mes.toString());

document.getElementById('senha').textContent = senha
