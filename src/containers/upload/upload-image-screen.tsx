import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UploadImageComponent } from "../../components/upload";
import { useUploadImage } from "../../hooks/useUploadImage";
import { userInfoRequest, userInfoSelector } from "../../redux/user";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenNames } from "../../utils";

export const UploadImage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const userId = useSelector(userInfoSelector).id;

  const { uploadImage } = useUploadImage();

  const [captionText, setCaptionText] = useState<string>("");

  const { imageToUpload } = route.params;

  const handleOnClickPost = () => {
    uploadImage(imageToUpload, captionText, userId);

    dispatch(userInfoRequest());
    navigation.pop();
    navigation.navigate(ScreenNames.home);
  };

  return (
    <UploadImageComponent
      onClickPost={handleOnClickPost}
      onChangeCaption={setCaptionText}
      image={imageToUpload.uri}
    />
  );
};
