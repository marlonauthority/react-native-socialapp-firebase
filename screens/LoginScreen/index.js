import React, { useRef, useState } from "react";
import {
  StatusBar,
  Image,
  LayoutAnimation,
  TouchableOpacity
} from "react-native";
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
  SignLinkText
} from "./styles";

import * as firebase from "firebase";

import backbanner from "../../assets/Blob_BG.png";
import Logo from "../../assets/Hi_Blob.png";
import backbannerfooter from "../../assets/Bottom_Blob.png";

function LoginScreen({ navigation }) {
  const passwordRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  function handleSubmit() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => setErrorMessage(error.message));
  }

  LayoutAnimation.easeInEaseOut();

  return (
    <Container>
      <Image source={backbanner} style={{ top: 0, left: 0 }} />

      <Image
        source={Logo}
        style={{
          alignSelf: "center",
          marginTop: -100,
          width: 145,
          height: 145
        }}
      />

      <Title>{`Olá novamente. \nSeja Bem vindo!`}</Title>

      <ContainerError>
        {errorMessage && <Error>{errorMessage}</Error>}
      </ContainerError>

      <Form>
        <FormText>Seu E-mail</FormText>
        <FormInput
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <FormText>Sua senhaa</FormText>
        <FormInput
          //icon="lock-outline"
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

        <SignLink onPress={() => navigation.navigate("Registrar")}>
          <SignLinkText>
            Novo por aqui?{" "}
            <SignLinkText style={{ color: "#e9446a" }}>
              Crie uma conta gratuíta!
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

export default LoginScreen;
