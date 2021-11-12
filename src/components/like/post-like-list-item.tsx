import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  nameView: {
    marginLeft: 20,
  },
  handleText: {
    fontSize: 15,
    color: "black",
  },
  nameText: {
    color: "gray",
  },
});

type Props = {
  userId: string;
  userImageUri?: string;
  userHandle: string;
  userName: string;
  onClickLike: (id: string) => void;
};

export const PostLikeListItemComponent = ({
  userId,
  userImageUri,
  userHandle,
  userName,
  onClickLike,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onClickLike(userId)}
      style={styles.mainContainer}
    >
      {userImageUri ? (
        <Image style={styles.userImg} source={{ uri: userImageUri }} />
      ) : (
        <Image
          style={styles.userImg}
          source={require("../../images/profile-pic-placeholder.png")}
        />
      )}

      <View style={styles.nameView}>
        <Text style={styles.handleText}>{userHandle}</Text>
        <Text style={styles.nameText}>{userName}</Text>
      </View>
    </TouchableOpacity>
  );
};
