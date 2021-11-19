import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IoniconsX from "react-native-vector-icons/Ionicons";
import { ScreenNames } from "../../utils";
import { SafeAreaView } from "react-native-safe-area-context";

export const CameraPreview = () => {
  const { imageData, extraSpace } = useRoute().params;
  const navigation = useNavigation();

  const onClickConfirm = () => {
    navigation.pop();
    navigation.navigate(ScreenNames.home);
  };

  const onClickCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={["top", "left", "right"]}>
      <Image
        style={{
          width: "100%",
          height: Dimensions.get("window").height - extraSpace,
        }}
        source={{
          uri: imageData.uri,
        }}
      />
      <TouchableOpacity style={styles.confirmButton} onPress={onClickConfirm}>
        <FontAwesome5 name={"arrow-right"} size={40} color={"#fff"} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.xButton} onPress={onClickCancel}>
        <IoniconsX name={"close"} size={40} color={"#fff"} />
      </TouchableOpacity>

      <View style={{ backgroundColor: "black", height: extraSpace }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: "100%",
    height: "100",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  confirmButton: {
    position: "absolute",
    top: 50,
    right: 10,
    alignSelf: "center",
    padding: 10,
    borderRadius: 30,
  },
  xButton: {
    position: "absolute",
    top: 50,
    left: 10,
    alignSelf: "center",
    padding: 10,
    borderRadius: 30,
  },
  postStoryText: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
});
