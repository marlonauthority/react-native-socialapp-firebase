import React from "react";
import FirebaseKeys from "./config/Firebasekeys";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from "@expo/vector-icons/Ionicons";

import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

import MessagesScreen from "./screens/MessagesScreen";
import NotificationScreen from "./screens/NotificationScreen";
import PostScreen from "./screens/PostScreen";
import ProfileScreen from "./screens/ProfileScreen";

import * as firebase from "firebase";

// var firebaseConfig = FirebaseKeys;
// firebase.initializeApp(firebaseConfig);

const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator(
      {
        Inicio: {
          screen: HomeScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-home" size={24} color={tintColor} />
            )
          }
        },
        Mensagens: {
          screen: MessagesScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-chatboxes" size={24} color={tintColor} />
            )
          }
        },
        Postagens: {
          screen: PostScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon
                name="ios-add-circle"
                size={48}
                color="#e9446a"
                style={{
                  elevation: 2,
                  shadowColor: "#e9446a",
                  shadowOffset: { width: 0, height: 0 },
                  shadowRadius: 10,
                  shadowOpacity: 0.3
                }}
              />
            )
          }
        },
        Notificações: {
          screen: NotificationScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-notifications" size={24} color={tintColor} />
            )
          }
        },
        Perfil: {
          screen: ProfileScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-person" size={24} color={tintColor} />
            )
          }
        }
      },
      {
        defaultNavigationOptions: {
          tabBarOnPress: ({ navigation, defaultHandler }) => {
            if (navigation.state.key === "Postagens") {
              navigation.navigate("postModal");
            } else {
              defaultHandler();
            }
          }
        },
        tabBarOptions: {
          activeTintColor: "#161f3d",
          inactiveTintColor: "#b8bbc4",
          showLabel: false
        }
      }
    ),
    postModal: {
      screen: PostScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
    // initialRouteName: "postModal"
  }
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Registrar: RegisterScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppContainer,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);
