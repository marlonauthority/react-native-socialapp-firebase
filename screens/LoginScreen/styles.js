import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;
export const ContainerError = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
`;

export const Title = styled.Text`
  font-size: 18px;
  /* margin-top: 32px; */
  font-weight: 400;
  text-align: center;
  color: #333;
`;

export const Error = styled.Text`
  color: #e9446a;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin: 0 30px 48px;
`;

export const FormText = styled.Text`
  font-size: 10px;
  color: #8a8f9e;
  text-transform: uppercase;
`;

export const FormInput = styled.TextInput.attrs({
  selectionColor: "#484848",
  borderBottomColor: "#8a8f9e",
  borderBottomWidth: StyleSheet.hairlineWidth,
  height: 40,
  fontSize: 15,
  color: "#161f3d",
  marginBottom: 32
})``;

export const SubmitButton = styled.TouchableOpacity`
  /* margin: 0 30px; */
  background: #e9446a;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const SignLink = styled.TouchableOpacity`
  align-self: center;
  margin-top: 32px;
`;

export const SignLinkText = styled.Text`
  color: #414959;
  font-size: 13px;
  font-weight: 500;
`;

export const Content = styled.View`
  position: absolute;
  top: 70px;
  align-items: center;
  width: 100%;
`;

export const Avatar = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #e1e2e6;
  margin-top: 48px;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;
