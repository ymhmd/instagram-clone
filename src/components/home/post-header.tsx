import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/FontAwesome5";

import { useLike } from "../../hooks/useLike";
import { like as likePost, dislike as dislikePost } from "../../api/like";
import { userInfoSelector } from "../../redux/user";
import { useSelector } from "react-redux";
import { useNavigate } from "../../hooks/useNavigate";
import { PostMainContainer } from "../../styles/container.style";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  userImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },
  handleName: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    textAlignVertical: "center",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },
  postCaption: {
    color: "black",
    fontSize: 15,
    textAlignVertical: "center",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
  },
  img: {
    width: "100%",
    aspectRatio: 1,
  },
  captionView: {
    flexDirection: "row",
    marginBottom: 5,
  },
  commentsText: {
    marginLeft: 10,
    fontSize: 15,
  },
  likeView: {
    marginLeft: 10,
    marginTop: 10,
  },
});

type Props = {
  userImageUri: string;
  imageUri: string;
  handleName: string;
  postCaption?: string;
  numberOfLikes: number;
  numberOfComments: number;
  likedByMe: boolean;
  postId: string;
  postUserId: string;
  onClickLikes: (id: string) => void;
};

const DOUBLE_PRESS_DELAY = 300;

export const PostHeadrComponent = ({
  userImageUri,
  imageUri,
  handleName,
  postCaption,
  numberOfLikes,
  numberOfComments,
  likedByMe,
  postId,
  postUserId,
  onClickLikes,
}: Props) => {
  const { isLiked, toggleLike, likesCount } = useLike(likedByMe, numberOfLikes);

  let previousTap: number | null = null;

  const userInfo = useSelector(userInfoSelector);

  const { navigateToVisitingProfile } = useNavigate();

  const likeDislike = async () => {
    toggleLike();

    if (isLiked) {
      dislikePost(userInfo.id, postId, postUserId);
    } else {
      likePost(
        userInfo.id,
        userInfo.handle,
        userInfo.name,
        postId,
        postUserId,
        userInfo.profilePictureUri
      );
    }
  };

  const handleOnClickLike = async () => {
    likeDislike();
  };

  const handleDoubleTap = () => {
    if (!isLiked) {
      const now = Date.now();
      if (previousTap && now - previousTap < DOUBLE_PRESS_DELAY) {
        likeDislike();
      } else {
        previousTap = now;
      }
    }
  };

  return (
    <PostMainContainer>
      <View style={styles.headerContainer}>
        {userImageUri ? (
          <Image style={styles.userImg} source={{ uri: userImageUri }} />
        ) : (
          <Image
            style={styles.userImg}
            source={require("../../images/profile-pic-placeholder.png")}
          />
        )}

        <Text
          onPress={() => navigateToVisitingProfile(postUserId)}
          style={styles.handleName}
        >
          {handleName}
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={handleDoubleTap}>
        <Image style={styles.img} source={{ uri: imageUri }} />
      </TouchableWithoutFeedback>
      <TouchableOpacity style={styles.likeView} onPress={handleOnClickLike}>
        {isLiked ? (
          <Ionicons name={"heart"} size={25} color={"red"} solid />
        ) : (
          <Ionicons name={"heart"} size={25} color={"black"} />
        )}
      </TouchableOpacity>

      {likesCount > 0 && (
        <Text
          onPress={() => onClickLikes(postId)}
          style={styles.handleName}
        >{`${String(likesCount)} likes`}</Text>
      )}
      <View style={styles.captionView}>
        <Text
          onPress={() => navigateToVisitingProfile(postUserId)}
          style={styles.handleName}
        >
          {handleName}
        </Text>
        {postCaption && postCaption.length && (
          <Text style={styles.postCaption}>{postCaption}</Text>
        )}
      </View>
      {numberOfComments > 0 && (
        <TouchableOpacity>
          <Text style={styles.commentsText}>{`View all ${String(
            numberOfComments
          )} comments`}</Text>
        </TouchableOpacity>
      )}
    </PostMainContainer>
  );
};
