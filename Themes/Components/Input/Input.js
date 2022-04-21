import * as React from "react";
import { TextInput, useTheme } from "react-native-paper";

const Input = ({ Label, variant, size, ...props }) => {
  const [text, setText] = React.useState("");
  const { input,colors } = useTheme();

  size = size == undefined ? "expansive" : size

  return (
    <TextInput
      outlineColor={colors.primary}
      style={input[size]}
      label={Label}
      value={text}
      onChangeText={(text) => setText(text)}
      mode={variant}
      {...props}
    />
  );
};

export default Input;
