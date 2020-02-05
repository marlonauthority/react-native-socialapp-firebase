import React from "react";
import { View, StatusBar } from "react-native";
import "./config/ReactotronConfig";
import Routes from "./Router";

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />

      <Routes />
    </>
  );
}
