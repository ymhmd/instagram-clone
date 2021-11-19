import React, { useEffect, useState } from "react";
import { LogBox, ScrollView } from "react-native";
import { Loader } from "../../components/common";
import { ProfileHeaderComponent } from "../../components/profile";
import { UserDetailsComponent } from "../../components/profile/user-details";
import { ImageGridList } from "./image-grid-list";
import { UserHeader } from "./user-header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { usePrettifyUserHandle } from "../../hooks/usePrettifyUserHandle";
import { UserPayload } from "../../redux/user";

import { getUserInfo, getUserPosts } from "../../api/user";
import { UserPostInfo } from "../../redux/posts";
import { SafeAreaView } from "react-native-safe-area-context";

type AllUserInfo = {
  userInfo: UserPayload | undefined;
  posts: UserPostInfo[] | undefined;
};

export const VisitingProfileScreen = () => {
  const route = useRoute();
  const { prettifyUserHandle } = usePrettifyUserHandle();

  const { visitingUserId } = route.params;

  const handleOnClick = () => {};

  const [allUserInfo, setAllUserInfo] = useState<AllUserInfo>({
    userInfo: undefined,
    posts: [],
  });

  const getVisitingUserDetails = async () => {
    const userBasicInfo = await getUserInfo(visitingUserId);
    const userPosts = await getUserPosts(visitingUserId);

    setAllUserInfo({ userInfo: userBasicInfo, posts: userPosts });
  };

  const { userInfo, posts } = allUserInfo;

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    getVisitingUserDetails();
  }, [visitingUserId]);

  return !userInfo ? (
    <Loader />
  ) : (
    <ScrollView nestedScrollEnabled={true}>
      <UserHeader profileHandle={userInfo.handle} isMyProfile={false} />

      <ProfileHeaderComponent
        onClickFollowers={handleOnClick}
        onClickPosts={handleOnClick}
        onClickFollowing={handleOnClick}
        numberOfPosts={userInfo.numberOfPosts}
        numberOfFollowers={userInfo.numberOfFollowers}
        numberOfFollowing={userInfo.numberOfFollowing}
        profilePictureUri={userInfo.profilePictureUri}
      />

      <UserDetailsComponent
        userName={userInfo.name}
        userHandle={prettifyUserHandle(userInfo.handle)}
        userAbout={userInfo.about}
      />

      <ImageGridList posts={posts} isLoading={false} />
    </ScrollView>
  );
};
