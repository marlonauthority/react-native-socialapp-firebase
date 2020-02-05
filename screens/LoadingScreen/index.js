import React, { useEffect } from "react";

import { Container, Title } from "./styles";
import { ActivityIndicator } from "react-native";

import * as firebase from "firebase";

export default function LoadingScreen({ navigation }) {
  console.tron.log(navigation);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      navigation.navigate(user ? "App" : "Auth");
    });
  }, []);

  return (
    <Container>
      <Title>Loading...</Title>
      <ActivityIndicator size="large"></ActivityIndicator>
    </Container>
  );
}
