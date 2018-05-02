document.getElementById('btn3').onclick=fnt1;
const {ipcRenderer} = require('electron')
const $ = require('jquery')

var Excel = require('exceljs');
var workbook = new Excel.Workbook()
function fnt1(){
var name=  document.getElementById('name').value
var pass=  document.getElementById('pass').value
var data=[name,pass]
  console.log(name+'hey enga peru '+pass)
    process.env.username=name;
    ipcRenderer.send('login',data)

}
