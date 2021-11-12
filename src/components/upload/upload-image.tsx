import React from "react";
import { Image, TextInput, StyleSheet, ScrollView } from "react-native";
import { PrimaryButton } from "../../styles/button.styled";

type Props = {
  image: string;
  onChangeCaption: (text: string) => void;
  onClickPost: () => void;
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    flexDirection: "column",
    height: "90%",
  },
  img: {
    width: "90%",
    height: 500,
    alignContent: "center",
    alignSelf: "center",
  },
  captionInput: {
    width: "100%",
    borderBottomColor: "green",
    borderBottomWidth: 0.3,
  },
  addPostButton: {
    margin: 20,
    padding: 10,
    backgroundColor: "#DEFEEE",
  },
  addPostButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export const UploadImageComponent = ({
  image,
  onChangeCaption,
  onClickPost,
}: Props) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Image
        style={styles.img}
        source={{
          uri: image,
        }}
      />

      <TextInput
        style={styles.captionInput}
        placeholder={"caption"}
        numberOfLines={2}
        multiline={true}
        onChangeText={onChangeCaption}
      />

      <PrimaryButton title={"Upload Now styled!"} onClick={onClickPost} />
    </ScrollView>
  );
};
