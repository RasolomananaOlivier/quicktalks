import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import storage from "../../lib/firebase";

const uploadImage = async (file: File, directory = "avatar") => {
  const storageRef = ref(storage, `/${directory}/${file.name}`);
  const uploadTask = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(uploadTask.ref);

  return url;
};

const FirebaseStorage = {
  uploadImage,
};

export default FirebaseStorage;
