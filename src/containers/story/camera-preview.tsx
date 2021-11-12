import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/FontAwesome5";

export const CameraPreview = () => {
  const { imageData } = useRoute().params;
  const navigation = useNavigation();

  const onClickConfirm = () => {
    navigation.pop();
    navigation.navigate("Home");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        style={styles.img}
        source={{
          uri: imageData.uri,
        }}
      />
      <TouchableOpacity style={styles.confirmButton} onPress={onClickConfirm}>
        <Ionicons name={"arrow-right"} size={40} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  confirmButton: {
    position: "absolute",
    top: 50,
    right: 10,
    alignSelf: "center",
    padding: 10,
    borderRadius: 30,
  },
});
