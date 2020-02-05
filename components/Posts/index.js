import React from "react";
import moment from "moment";

import {
  FeedItem,
  Container,
  Name,
  Header,
  Footer,
  Directionrow,
  DescriptionText,
  Time,
  Avatar,
  ImagePost
} from "./styles";

import Icon from "@expo/vector-icons/Ionicons";

export default function Posts({ data }) {
  //console.tron.log(data);
  return (
    <FeedItem>
      <Avatar source={{ uri: data.avatar }} />
      <Container>
        <Directionrow>
          <Header>
            <Name>{data.name}</Name>
            <Time>{moment(data.timestamp).fromNow()}</Time>
          </Header>

          <Icon name="ios-more" color="#73788b" size={24} />
        </Directionrow>
        <DescriptionText>{data.text}</DescriptionText>
        <ImagePost source={{ uri: data.image }} resizeMode="cover" />
        <Footer>
          <Icon
            name="ios-heart-empty"
            size={24}
            color="#73788b"
            style={{ marginRight: 16 }}
          />
          <Icon name="ios-chatboxes" size={24} color="#73788b" />
        </Footer>
      </Container>
    </FeedItem>
  );
}
