import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 32px;
  border-bottom-width: 1px;
  border-bottom-color: #d8d9db;
`;
export const Post = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-weight: 500;
`;

export const BackButton = styled.TouchableOpacity``;

export const InputContainer = styled.View`
  margin: 32px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 16px;
`;

export const TextInputContainer = styled.TextInput`
  flex: 1;
`;

export const Photo = styled.TouchableOpacity`
  align-items: flex-end;
  margin: 0 32px;
`;

export const ViewPhoto = styled.View`
  margin: 32px 32px 0;
  height: 150px;
`;

export const ImageState = styled.Image`
  width: 100%;
  height: 100%;
  /* background-color: #ccc; */
`;
