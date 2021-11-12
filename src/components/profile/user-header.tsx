import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  handleText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',

    textAlign: 'center',
  },
  addPostButton: {
    width: 40,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
});

type Props = {
  profileHandle: string;
  isMyProfile: boolean;
  onClickAddPost: () => void;
};

export const UserHeaderComponent = ({
  profileHandle,
  isMyProfile,
  onClickAddPost,
}: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.handleText}>{profileHandle}</Text>
      {isMyProfile && (
        <TouchableOpacity style={styles.addPostButton} onPress={onClickAddPost}>
          <Text style={styles.handleText}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
