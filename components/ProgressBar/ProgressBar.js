import { View } from "../Themed";
import Text from "../../Themes/Components/Text/Text"
import { useTheme } from "react-native-paper";

export default function ProgressBar(props) {
  // Propriedade para desativar o progress bar

  const desactived = props.desactived == null ? false : props.desactived;
  const text_children = props.children;
  const progress = props.progress == 0 ? 0.05 : props.progress;

  return desactived ? (
    <Desactivated_progress />
  ) : (
    <Activated_progress progress={progress}>{text_children}</Activated_progress>
  );
}

const Activated_progress = function (props) {
  const { progressBar,colors, } = useTheme();
  const text_children = props.children;
  const progress = props.progress == 0 ? 0.05 : props.progress;

  return (
    <View style={progressBar.viewProgress}>
      <View
        style={[
          progressBar.actualProgress,
          { width: `${progress * 100}%`, color: "red" },
        ]}
      />

      <Text style={progressBar.textProgress}>{text_children}</Text>
    </View>
  );
};

const Desactivated_progress = function (props) {
  const { progressBar,colors, } = useTheme();
  return (
    <View style={[progressBar.viewProgress, { borderColor: "rgba(0, 0, 0, .2)" }]}>
      <Text style={[progressBar.textProgress, { color: "rgba(0, 0, 0, .2)" }]}>
        ? ? ? ? ? ?
      </Text>
    </View>
  );
};
