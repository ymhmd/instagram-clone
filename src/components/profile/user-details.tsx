import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: 20,
  },
  userNameText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  userAboutText: {
    color: 'black',
    fontSize: 15,
  },
  userHandleText: {
    color: 'black',
    fontSize: 15,
  },
});

type Props = {
  userName: string;
  userHandle?: string;
  userAbout?: string;
};

export const UserDetailsComponent = ({
  userName,
  userHandle,
  userAbout,
}: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.userNameText}>{userName}</Text>
      <Text style={styles.userHandleText}>{userHandle}</Text>
      {userAbout && <Text style={styles.userAboutText}>{userAbout}</Text>}
    </View>
  );
};
