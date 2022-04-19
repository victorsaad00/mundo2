import * as React from "react";
import { TextInput } from "react-native-paper";

const Input = ({ Label, variant, ...props }) => {
  const [text, setText] = React.useState("");
  //const { textInput } = React.useTheme();

  return (
    <TextInput
      label={Label}
      value={text}
      onChangeText={(text) => setText(text)}
      variant={variant}
      {...props}
    />
  );
};

export default Input;
