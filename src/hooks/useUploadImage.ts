import React from "react";
import DocumentPicker, {
  DocumentPickerResponse,
} from "react-native-document-picker";

import { uploadImageToThirdParty } from "../api/image";

export const useUploadImage = () => {
  const uploadImage = async (
    fileToUpload: DocumentPickerResponse,
    caption: string,
    userId: string
  ) => {
    if (fileToUpload !== null) {
      await uploadImageToThirdParty(userId, fileToUpload, caption);
      return true;
    } else {
      return false;
    }
  };

  const selecImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      console.log("res", res);
      return res[0];
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        return false;
      }
      console.log("insidecatch");
    }
  };

  return {
    selecImage,
    uploadImage,
  };
};
