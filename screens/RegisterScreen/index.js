import React, { useRef, useState } from "react";
import { StatusBar, Image, LayoutAnimation } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import {
  Container,
  Title,
  ContainerError,
  Error,
  Form,
  FormText,
  FormInput,
  SubmitButtonText,
  SubmitButton,
  SignLink,
  SignLinkText,
  BackButton,
  Content
} from "../LoginScreen/styles";

import { AvatarPlaceholder, Avatar } from "./styles";

import Fire from "../../utils/Fire";
import * as firebase from "firebase";

import backbanner from "../../assets/Blob_BG.png";
import Logo from "../../assets/Hi_Blob.png";
import backbannerfooter from "../../assets/Bottom_Blob.png";

import UserPermissions from "../../utils/userPermissions";
import * as ImagePicker from "expo-image-picker";

export default function RegisterScreen({ navigation }) {
  const passwordRef = useRef();
  const emailRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  function handleSubmit() {
    const user = {
      name,
      email,
      password,
      avatar
    };
    //console.tron.log(user);
    Fire.shared.createUser(user);
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)

    //   .then(userCredentials => {
    //     return userCredentials.user.updateProfile({
    //       displayName: name
    //     });
    //   })
    //   .catch(error => {
    //     setErrorMessage(error.message);
    //   });
  }

  async function handlePickAvatar() {
    UserPermissions.getCameraPermission();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  }

  LayoutAnimation.easeInEaseOut();

  return (
    <Container>
      <Image source={backbanner} style={{ top: 0, left: 0 }} />

      <Content>
        <AvatarPlaceholder onPress={handlePickAvatar}>
          <Avatar source={{ uri: avatar }} />
          {!avatar && (
            <Icon
              name="ios-add"
              size={50}
              color="#e9446a"
              style={{
                marginTop: 45,
                marginLeft: 40
              }}
            />
          )}
        </AvatarPlaceholder>
      </Content>
      <Title style={{ marginTop: 20, marginBottom: -10 }}>
        Criar uma nova conta.
      </Title>

      <ContainerError>
        {errorMessage && <Error>{errorMessage}</Error>}
      </ContainerError>

      <Form>
        <FormText>Seu nome</FormText>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Seu nome completo"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />
        <FormText>Seu E-mail</FormText>
        <FormInput
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <FormText>Sua senhaa</FormText>
        <FormInput
          secureTextEntry
          placeholder="Sua senha secreta"
          ref={passwordRef}
          returnKeyType="send"
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleSubmit}
        />

        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Entrar</SubmitButtonText>
        </SubmitButton>

        <SignLink onPress={() => navigation.navigate("Login")}>
          <SignLinkText>
            Já possui uma conta?{" "}
            <SignLinkText style={{ color: "#e9446a" }}>
              Faça Login!
            </SignLinkText>
          </SignLinkText>
        </SignLink>
      </Form>

      <Image
        source={backbannerfooter}
        style={{ bottom: 0, right: 0, position: "absolute" }}
      />
    </Container>
  );
}
