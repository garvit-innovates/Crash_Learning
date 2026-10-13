
import * as XLSX from 'xlsx';

export function readExcelData(
  filePath: string,
  sheetName: string = 'Sheet1'
): Record<string, unknown>[] {
  const workbook = XLSX.readFile(filePath);

  const worksheet = workbook.Sheets[sheetName];

  if (!worksheet) {
    throw new Error(
      `Sheet "${sheetName}" not found in Excel file`
    );
  }

  const data = XLSX.utils.sheet_to_json<Record<string, unknown>>(
    worksheet
  );

  return data;
}
