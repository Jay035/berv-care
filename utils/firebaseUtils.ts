import { storage } from "@/config/Config";

// export const uploadCSVToFirebaseStorage = async (csvData: string) => {
//     try {
//       // Create a reference to the storage location where you want to upload the CSV file
//       const storageRef = storage.ref('csv_files/data.csv');
  
//       // Upload the CSV file as a Blob
//       const blob = new Blob([csvData], { type: 'text/csv' });
//       await storageRef.put(blob);
  
//       console.log('CSV file uploaded to Firebase Cloud Storage.');
//     } catch (error) {
//       throw new Error('Failed to upload CSV file to Firebase Cloud Storage.');
//     }
//   };