const XLSX = require('xlsx');

function readExcelData(filePath, sheetName = 'Sheet1') {

    const workbook = XLSX.readFile(filePath);

    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        throw new Error(`Sheet "${sheetName}" not found in Excel file`);
    }

    const data = XLSX.utils.sheet_to_json(worksheet);
    return data;
}


module.exports = {readExcelData};