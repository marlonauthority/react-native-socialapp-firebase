import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #efecf4;
`;
export const Header = styled.View.attrs({
  shadowColor: "#454d65",
  shadowOffset: { height: 5 },
  elevation: 5,
  shadowRadius: 5,
  shadowOpacity: 0.2,
  zIndex: 10
})`
  padding-top: 64px;
  padding-bottom: 16px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #ebecf4;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

export const Feed = styled.FlatList`
  margin: 0 16px;
`;
