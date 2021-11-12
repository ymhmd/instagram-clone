import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export const LiveCamera = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [cameraRef, setCameraRef] = useState<any>(null);

  const onClickCapture = async () => {
    if (cameraRef) {
      const options = {
        quality: 0.5,
        base64: false,
      };
      const data = await cameraRef.takePictureAsync(options);

      navigation.navigate("CameraPreview", {
        imageData: data,
      });
    }
  };

  return isFocused ? (
    <View style={styles.mainContainer}>
      <Camera
        ref={(ref) => {
          setCameraRef(ref);
        }}
        style={styles.camera}
        type={Camera.Constants.Type.back}
        autoFocus={Camera.Constants.AutoFocus.on}
      />
      <TouchableOpacity style={styles.button} onPress={onClickCapture} />
    </View>
  ) : (
    <View />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    position: "absolute",
    bottom: 50,
    width: 70,
    height: 70,
    borderRadius: 35,
    alignSelf: "center",
    backgroundColor: "#DEFEEE",
  },
});
