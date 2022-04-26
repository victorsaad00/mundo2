import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";

const AppBar = ({ title, backAction }, props) => {
  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.BackAction />
        <Appbar.Content title={title} />
      </Appbar>
    </SafeAreaView>
  );
};

export default AppBar;
