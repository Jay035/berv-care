import Papa from 'papaparse';

export const convertDataToCSV = (data: any[]) => {
  // Convert the data to CSV format using papaparse
  const csv = Papa.unparse(data);
  console.log(csv)
  return csv;
};