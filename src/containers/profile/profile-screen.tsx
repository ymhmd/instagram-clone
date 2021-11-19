import React, { useEffect, useState } from "react";
import { ScrollView, LogBox, RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components/common";
import { ImageGridList } from "./image-grid-list";
import { ProfileHeaderComponent } from "../../components/profile/profile-header";
import { UserDetailsComponent } from "../../components/profile/user-details";

import { useNavigation } from "@react-navigation/native";

import {
  userPostsBasicInfoSelector,
  userPostsIsLoadingSelector,
  userPostsRequest,
} from "../../redux/posts";

import {
  userInfoSelector,
  userInfoRequest,
  isLoadingSelector,
} from "../../redux/user";
import { UserHeader } from "./user-header";
import { usePrettifyUserHandle } from "../../hooks/usePrettifyUserHandle";
import { SafeAreaView } from "react-native-safe-area-context";

export const Profile = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { prettifyUserHandle } = usePrettifyUserHandle();

  const isLoading = useSelector(isLoadingSelector);
  const userInfo = useSelector(userInfoSelector);

  const userPosts = useSelector(userPostsBasicInfoSelector);
  const postsIsLoading = useSelector(userPostsIsLoadingSelector);

  //Placeholder for arrow function
  const handleOnClick = () => {};

  const dipatchAllUserInfo = () => {
    dispatch(userInfoRequest());
    dispatch(userPostsRequest());
  };

  useEffect(() => {
    //TODO: find long term solution for this warning
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    dipatchAllUserInfo();
  }, []);

  const handleOnRefresh = () => {
    setRefreshing(true);
    dipatchAllUserInfo();
    setRefreshing(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <SafeAreaView edges={["top", "left", "right"]}>
      <ScrollView
        nestedScrollEnabled={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
        }
      >
        <UserHeader profileHandle={userInfo.handle} isMyProfile={true} />

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

        <ImageGridList posts={userPosts} isLoading={postsIsLoading} />
      </ScrollView>
    </SafeAreaView>
  );
};
