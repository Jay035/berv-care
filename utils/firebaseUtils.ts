import { storage } from "@/config/Config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";

export async function UploadCSVToFirebaseStorage(
  csvData: string,
  selectedHospitalLocation: string,
  setDownloadCSVLink: (e:any) => void,
) {

  // Create a storage reference from our storage service
  const storageRef = ref(
    storage,
    `csv/${selectedHospitalLocation}-hospital(s)-csv`
  );
  const metadata = {
    contentType: "text/csv",
  };

  // Upload the CSV file as a Blob
  const blob = new Blob([csvData], { type: "text/csv" });
  console.log(selectedHospitalLocation);
  const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

  // console.log("CSV file uploaded to Firebase Cloud Storage.", uploadTask);
  uploadTask.on(
    "state_changed",
    (snapshot: any) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          console.log("User doesn't have permission to access the object");
          break;
        case "storage/canceled":
          // User canceled the upload
          console.log("User canceled the upload");
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          console.log("Unknown error occurred, inspect error.serverResponse");
          break;
      }
    },

    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        // toast.success(`Download generated CSV file at ${downloadURL}`);
        setDownloadCSVLink?.(downloadURL);
        return downloadURL;
      });
    }
  );
}
