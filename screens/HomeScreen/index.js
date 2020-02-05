import React, { useState, useEffect } from "react";
import { withNavigationFocus } from "react-navigation";

import { Container, Header, Title, Feed } from "./styles";

import * as firebase from "firebase";

require("firebase/firestore");
import Fire from "../../utils/Fire";

import Post from "../../components/Posts";

// const posts = [
//   {
//     id: 1,
//     name: "John Doe",
//     text: "Lorem ipsum dolor sit amet, consectetuer elit",
//     timestamp: 1580866819516,
//     avatar: "https://api.adorable.io/avatar/50/qualquercoisa.png",
//     image: "https://api.adorable.io/avatar/150/outraqualquercoisa.png"
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     text: "Lorem ipsum dolor sit amet, consectetuer elit",
//     timestamp: 1580866819516,
//     avatar: "https://api.adorable.io/avatar/50/qualquercoisa.png",
//     image: "https://api.adorable.io/avatar/150/outraqualquercoisa.png"
//   },
//   {
//     id: 3,
//     name: "John Doe",
//     text: "Lorem ipsum dolor sit amet, consectetuer elit",
//     timestamp: 1580866819516,
//     avatar: "https://api.adorable.io/avatar/50/qualquercoisa.png",
//     image: "https://api.adorable.io/avatar/150/outraqualquercoisa.png"
//   },
//   {
//     id: 4,
//     name: "John Doe",
//     text: "Lorem ipsum dolor sit amet, consectetuer elit",
//     timestamp: 1580866819516,
//     avatar: "https://api.adorable.io/avatar/50/qualquercoisa.png",
//     image: "https://api.adorable.io/avatar/150/outraqualquercoisa.png"
//   },
//   {
//     id: 5,
//     name: "John Doe",
//     text: "Lorem ipsum dolor sit amet, consectetuer elit",
//     timestamp: 1580866819516,
//     avatar: "https://api.adorable.io/avatar/50/qualquercoisa.png",
//     image: "https://api.adorable.io/avatar/150/outraqualquercoisa.png"
//   }
// ];

function HomeScreen({ isFocused, navigation }) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (isFocused) {
      getDocs();
    }
  }, [isFocused]);

  // useEffect(() => {
  //   getDocs();
  // }, []);

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    let unsubscribe = null;
    const userId = Fire.shared.uid;

    unsubscribe = Fire.shared.firestore
      .collection("users")
      .doc(userId)
      .onSnapshot(doc => {
        setUser(doc.data());
      });
    //console.tron.log(user);
  }

  function getDocs() {
    return [
      firebase
        .firestore()
        .collection("posts")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            let posts = querySnapshot.docs.map(doc => doc.data());
            setPosts(posts);
            console.tron.log(posts);
            return posts;
          });
        })
    ];
  }

  return (
    <Container>
      <Header>
        <Title>Feed</Title>
      </Header>
      <Feed
        data={posts}
        keyExtractor={item => String(item.timestamp)}
        renderItem={({ item }) => <Post data={item} />}
      />
    </Container>
  );
}

export default withNavigationFocus(HomeScreen);
