import React from "react";
import {
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { UserPostInfo } from "../../redux/posts";

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
});

type ImageItemProps = {
  item: any;
};

const ImageItem = (
  { item }: ImageItemProps,
  onClickImage: (id: string) => void
) => {
  const screenWidth = Dimensions.get("window").width;
  const imageSize = (screenWidth - 20) / 3;

  return (
    <TouchableOpacity
      key={item._id}
      onPress={() => {
        onClickImage(item._id);
      }}
    >
      <Image
        style={{ height: imageSize, width: imageSize, margin: 1 }}
        source={{
          uri: item.imageUri,
        }}
      />
    </TouchableOpacity>
  );
};

type Props = {
  imageListData: UserPostInfo[] | undefined;
  onClickImage: (id: string) => void;
};

export const ImageGridListComponent = ({
  imageListData,
  onClickImage,
}: Props) => {
  return (
    <FlatList
      style={styles.mainContainer}
      data={imageListData}
      renderItem={(item) => ImageItem(item, onClickImage)}
      numColumns={3}
      scrollEnabled={false}
      keyExtractor={(item) => item._id}
    />
  );
};
