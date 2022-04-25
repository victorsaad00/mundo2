import * as React from "react";
import { useTheme,Text as DefaultText } from "react-native-paper";


const Text = ({ variant, size, style, ...props }) => {
  const { text,colors } = useTheme();

  variant = variant == null ? "primary" : variant;
  size = size == undefined ? "expansive" : size;
  return (
    <DefaultText  style={[{ color: colors[variant]}, text[size] ,style]} {...props} />
  );
};

export default Text;
