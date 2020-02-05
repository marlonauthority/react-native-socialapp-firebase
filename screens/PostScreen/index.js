import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import {
  Container,
  Header,
  Post,
  Title,
  BackButton,
  InputContainer,
  Avatar,
  TextInputContainer,
  Photo,
  ViewPhoto,
  ImageState
} from "./styles";

import avatarImg from "../../assets/avatar.png";

import Contants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Fire from "../../utils/Fire";

import LoadingScreen from "../LoadingScreen";

const firebase = require("firebase");
require("firebase/firestore");

export default function PostScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState();
  const [text, setText] = useState("");
  const [imagestate, setImageState] = useState();

  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    let unsubscribe = null;
    const userId = Fire.shared.uid;

    unsubscribe = await Fire.shared.firestore
      .collection("users")
      .doc(userId)
      .onSnapshot(doc => {
        setUser(doc.data());
      });
    // console.tron.log(user);
  }

  useEffect(() => {
    getPhotoPermission();
  }, []);

  async function getPhotoPermission() {
    if (Contants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status != "granted") {
        alert("Necessário permissão para acessar rolo da camêra.");
      }
    }
  }

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3]
    });
    if (!result.cancelled) {
      setImageState(result.uri);
    }
  }

  function handlePost() {
    setLoading(true);

    Fire.shared
      .addPost({
        name: user.name,
        text: text.trim(),
        localUri: imagestate,
        uri: user.avatar
      })
      .then(ref => {
        setText();
        setImageState();
        navigation.navigate("Inicio");
      })
      .catch(error => {
        alert(error);
      });
    setLoading(false);
  }

  return (
    <>
      {loading && loading === true ? (
        <LoadingScreen />
      ) : (
        <Container>
          <Header>
            <View>
              <BackButton onPress={() => navigation.goBack()}>
                <Icon name="ios-arrow-back" size={24} color="#000" />
              </BackButton>
            </View>
            <Post onPress={handlePost}>
              <Title>Postagem</Title>
            </Post>
          </Header>

          <InputContainer>
            <Avatar source={{ uri: user.avatar }} />
            <TextInputContainer
              autoFocus={true}
              multiline={true}
              numberOfLine={4}
              placeholder="No que você esta pensando?"
              onChangeText={setText}
              value={text}
            />
          </InputContainer>

          <Photo onPress={pickImage}>
            <Icon name="md-camera" size={32} color="#888888" />
          </Photo>
          <ViewPhoto>
            <ImageState source={{ uri: imagestate }} />
          </ViewPhoto>
        </Container>
      )}
    </>
  );
}
