import { convertDataToCSV } from "@/utils/csvUtils";
import { UploadCSVToFirebaseStorage } from "@/utils/firebaseUtils";

export async function HandleExportData(data: any){
  // toast.info('exporting data....')
  try {
    const csvData = convertDataToCSV(data);
    console.log(csvData);
    await UploadCSVToFirebaseStorage(
      csvData
      // setDownloadCSVLink,
      // hospitalLocationSelected,
    );
    console.log("Data exported successfully");
  } catch (err: any) {
    console.log(err);
    // toast.error(err.message);
  }
};
