import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { Profile } from "./src/containers/profile";
import { UploadImage } from "./src/containers/upload";
import { Home } from "./src/containers/home";
import Icon from "react-native-vector-icons/MaterialIcons";
import { PostLikeListScreen } from "./src/containers/like";
import { VisitingProfileScreen } from "./src/containers/profile/visiting-profile-screen";
import { CameraPreview, LiveCamera } from "./src/containers/story";

import { ScreenNames } from "./src/utils";

const ProfileStackNavigator = createNativeStackNavigator();
const StoryStackNavigator = createNativeStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();
const MainTab = createMaterialTopTabNavigator();

const ProfileStack = () => {
  return (
    <ProfileStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStackNavigator.Screen
        name={ScreenNames.profile}
        component={Profile}
      />
      <ProfileStackNavigator.Screen
        name={ScreenNames.uploadImage}
        component={UploadImage}
        options={{
          headerTitle: "Upload Image",
          headerShown: true,
        }}
      />
    </ProfileStackNavigator.Navigator>
  );
};

const HomeStack = () => {
  return (
    <ProfileStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStackNavigator.Screen name={ScreenNames.home} component={Home} />

      <ProfileStackNavigator.Screen
        name={ScreenNames.visitingProfile}
        component={VisitingProfileScreen}
        options={{
          title: "",
          headerShown: true,
        }}
      />

      <ProfileStackNavigator.Screen
        name={ScreenNames.postLikeListScreen}
        component={PostLikeListScreen}
        options={{
          headerTitle: "Likes",
          headerShown: true,
        }}
      />
    </ProfileStackNavigator.Navigator>
  );
};

const MainRoot = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name="HomeRoot"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: () => <Icon name="home" color="#333" size={24} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="ProfileRoot"
        component={ProfileStack}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: () => <Icon name="account-box" color="#333" size={24} />,
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

const StoryRoot = () => {
  return (
    <StoryStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStackNavigator.Screen
        name={ScreenNames.liveCamera}
        component={LiveCamera}
      />
      <ProfileStackNavigator.Screen
        name={ScreenNames.cameraPreview}
        component={CameraPreview}
      />
    </StoryStackNavigator.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTab.Navigator
          screenOptions={{
            tabBarStyle: { display: "none" },
          }}
          initialRouteName={"MainRoot"}
        >
          <MainTab.Screen name="StoryRoot" component={StoryRoot} />
          <MainTab.Screen name="MainRoot" component={MainRoot} />
        </MainTab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
