var Excel = require('exceljs')
var workbook = new Excel.Workbook();

function a(){
//  workbook.xlsx.readFile('../customer.xlsx')
var arr=[]
  workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/trial_3/src/enquiry/customer.xlsx')
    .then(function(){
      var worksheet = workbook.getWorksheet(1)
      worksheet.eachRow(function(row,rowNumber){
        arr.push(row.values)
      })
    })
    console.log(arr)
return arr
}
module.exports = {
    a:a
}
