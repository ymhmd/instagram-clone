import React from "react";
import { UserHeaderComponent } from "../../components/profile/user-header";
import { useUploadImage } from "../../hooks/useUploadImage";
import { useNavigation } from "@react-navigation/native";

type Props = {
  profileHandle: string;
  isMyProfile: boolean;
};

export const UserHeader = ({ profileHandle, isMyProfile }: Props) => {
  const navigation = useNavigation();

  const { selecImage } = useUploadImage();

  const handleOnClickAddPost = async () => {
    const image = await selecImage();

    console.log("image", image);

    if (image) {
      navigation.navigate("UploadImage", {
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