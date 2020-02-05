import React, { useState, useEffect } from "react";
import { View, LayoutAnimation } from "react-native";
import { withNavigationFocus } from "react-navigation";

import {
  Container,
  Title,
  LogoutButton,
  LogoutButtonText,
  Profile,
  Avatar
} from "./styles";

import * as firebase from "firebase";

import Fire from "../../utils/Fire";
// import LoadingScreen from "../LoadingScreen";

function ProfileScreen({ uid, isFocused }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (isFocused) {
      getUser();
    }
  }, [isFocused]);

  async function getUser() {
    let unsubscribe = null;
    const userId = uid || Fire.shared.uid;

    unsubscribe = await Fire.shared.firestore
      .collection("users")
      .doc(userId)
      .onSnapshot(doc => {
        setUser(doc.data());
      });
    //console.tron.log(user);
  }

  LayoutAnimation.easeInEaseOut();

  function handleLogout() {
    firebase.auth().signOut();
  }

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: user.avatar }} />
      </Profile>
      <Title>{user.name}</Title>
      <LogoutButton onPress={handleLogout}>
        <LogoutButtonText>Sair</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
}

export default withNavigationFocus(ProfileScreen);
