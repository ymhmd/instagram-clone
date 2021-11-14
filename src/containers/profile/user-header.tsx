import React from "react";
import { UserHeaderComponent } from "../../components/profile/user-header";
import { useUploadImage } from "../../hooks/useUploadImage";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../../utils";

type Props = {
  profileHandle: string;
  isMyProfile: boolean;
};

export const UserHeader = ({ profileHandle, isMyProfile }: Props) => {
  const navigation = useNavigation();

  const { selecImage } = useUploadImage();

  const handleOnClickAddPost = async () => {
    const image = await selecImage();

    if (image) {
      navigation.navigate(ScreenNames.uploadImage, {
        imageToUpload: image,
      });
    }

    //TODO: Add this single image/post to the store ;)
    //dispatch(userInfoRequest());
  };

  return (
    <UserHeaderComponent
      profileHandle={profileHandle}
      onClickAddPost={handleOnClickAddPost}
      isMyProfile={isMyProfile}
    />
  );
};
