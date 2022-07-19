import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ThemeProvider } from "styled-components";
import { Home } from "./src/screens/Home";
import { theme } from "./src/themes/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Home />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
