import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HeaderBlockProps = {
  metricNumber?: number;
  metricText: string;
  handleOnPress: () => void;
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  metricContainer: {
    alignSelf: "center",
  },
  metricNumber: {
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 20,
  },
  metricText: {
    color: "black",
    alignSelf: "center",
  },
});

const HeaderBlock = ({
  metricNumber,
  metricText,
  handleOnPress,
}: HeaderBlockProps) => {
  return (
    <TouchableOpacity style={styles.metricContainer} onPress={handleOnPress}>
      <Text style={styles.metricNumber}>{metricNumber ? metricNumber : 0}</Text>
      <Text style={styles.metricText}>{metricText}</Text>
    </TouchableOpacity>
  );
};

type Props = {
  profilePictureUri?: string;
  numberOfPosts?: number;
  numberOfFollowers?: number;
  numberOfFollowing?: number;
  onClickPosts: () => void;
  onClickFollowers: () => void;
  onClickFollowing: () => void;
};

export const ProfileHeaderComponent = ({
  profilePictureUri,
  numberOfPosts,
  numberOfFollowers,
  numberOfFollowing,
  onClickPosts,
  onClickFollowers,
  onClickFollowing,
}: Props) => {
  return (
    <View style={styles.mainContainer}>
      {profilePictureUri ? (
        <Image
          style={styles.profilePicture}
          source={{ uri: profilePictureUri }}
        />
      ) : (
        <Image
          style={styles.profilePicture}
          source={require("../../images/profile-pic-placeholder.png")}
        />
      )}
      <HeaderBlock
        metricText="Posts"
        metricNumber={numberOfPosts}
        handleOnPress={onClickPosts}
      />
      <HeaderBlock
        metricText="Followers"
        metricNumber={numberOfFollowers}
        handleOnPress={onClickFollowers}
      />
      <HeaderBlock
        metricText="Following"
        metricNumber={numberOfFollowing}
        handleOnPress={onClickFollowing}
      />
    </View>
  );
};
