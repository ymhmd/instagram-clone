import React, { useEffect, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components/common";
import { PostHeadrComponent } from "../../components/home";
import {
  HomePostInfo,
  homePostsBasicInfoSelector,
  homePostsRequest,
} from "../../redux/posts";
import { userInfoSelector, setUserId, userInfoRequest } from "../../redux/user";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../../utils";

export const Home = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const homePosts: HomePostInfo[] | undefined = useSelector(
    homePostsBasicInfoSelector
  );

  const userInfo = useSelector(userInfoSelector);

  useEffect(() => {
    //TODO: user id should be passed after login
    dispatch(setUserId({ id: "6183daaaf68ad85e8e10d7da" }));
    dispatch(userInfoRequest());
    dispatch(homePostsRequest());
  }, []);

  const handleOnRefresh = () => {
    setRefreshing(true);
    dispatch(homePostsRequest());
    setRefreshing(false);
  };

  const handleOnClickLikes = (postId: string) => {
    navigation.navigate(ScreenNames.postLikeListScreen, {
      postId,
    });
  };

  return userInfo && homePosts && homePosts.length ? (
    <SafeAreaView edges={["top", "left", "right"]}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
        }
      >
        {homePosts.map((post) => (
          <PostHeadrComponent
            key={post._id}
            postId={post._id}
            postUserId={post.userId}
            handleName={post.handle}
            imageUri={post.imageUri}
            userImageUri={post.userImageUri}
            postCaption={post.caption}
            numberOfLikes={post.numberOfLikes}
            numberOfComments={6}
            likedByMe={post.likedByMe}
            onClickLikes={handleOnClickLikes}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Loader />
  );
};
