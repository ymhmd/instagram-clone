import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Loader } from "../../components/common";

export const LiveCamera = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [camera, setCamera] = useState(null);
  const [isRatioSet, setIsRatioSet] = useState<boolean>(false);
  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState<string>("4:3");

  const { height, width } = Dimensions.get("window");
  const screenRatio = height / width;

  useEffect(() => {
    prepareRatio();
  }, [isFocused, imagePadding, ratio, setRatio]);

  const prepareRatio = async () => {
    let desiredRatio = "4:3";
    try {
      if (Platform.OS === "android" && camera) {
        const ratios = await camera.getSupportedRatiosAsync();

        let distances: any = {};
        let realRatios: any = {};
        let minDistance = null;

        for (const ratio of ratios) {
          const parts = ratio.split(":");
          const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
          realRatios[ratio] = realRatio;
          const distance = screenRatio - realRatio;
          distances[ratio] = realRatio;
          if (minDistance == null) {
            minDistance = ratio;
          } else {
            if (distance >= 0 && distance < distances[minDistance]) {
              minDistance = ratio;
            }
          }
        }

        // set the best match
        desiredRatio = minDistance;
        const remainder = Math.floor(
          (height - realRatios[desiredRatio] * width) / 2
        );

        // set the preview padding and preview ratio
        setImagePadding(remainder / 2);
        setRatio(desiredRatio);
        setIsRatioSet(true);
      }
    } catch (error) {
      console.log("Error while preparing aspect ratio", error);
    }
  };

  const setCameraReady = async () => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };

  const onClickCapture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);

      navigation.navigate("CameraPreview", {
        imageData: data,
        extraSpace: imagePadding * 2,
      });
    }
  };

  return isFocused ? (
    <View style={styles.mainContainer}>
      <Camera
        style={[
          styles.cameraPreview,
          { marginTop: imagePadding, marginBottom: imagePadding },
        ]}
        onCameraReady={setCameraReady}
        ratio={ratio}
        ref={(ref) => {
          setCamera(ref);
        }}
        autoFocus={true}
      />
      <TouchableOpacity style={styles.button} onPress={onClickCapture} />
    </View>
  ) : (
    <Loader />
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
  cameraPreview: {
    flex: 1,
    width: "100%",
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
  information: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
