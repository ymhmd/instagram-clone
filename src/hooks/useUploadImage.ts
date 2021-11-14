import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { uploadImageToThirdParty } from "../api/image";
import { Alert, Platform } from "react-native";

export const useUploadImage = () => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const uploadImage = async (
    fileToUpload: any,
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
    let image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!image.cancelled) {
      return image;
    }

    return false;
  };

  return {
    selecImage,
    uploadImage,
  };
};
