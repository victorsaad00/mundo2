import { Text, View } from "../Themed";

import styles from "./StylesProgressBar.js";

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
  const text_children = props.children;
  const progress = props.progress == 0 ? 0.05 : props.progress;

  return (
    <View style={styles.viewProgress}>
      <View
        style={[
          styles.actualProgress,
          { width: `${progress * 100}%`, color: "red" },
        ]}
      />

      <Text style={styles.textProgress}>{text_children}</Text>
    </View>
  );
};

const Desactivated_progress = function (props) {
  return (
    <View style={[styles.viewProgress, { borderColor: "rgba(0, 0, 0, .2)" }]}>
      <Text style={[styles.textProgress, { color: "rgba(0, 0, 0, .2)" }]}>
        ? ? ? ? ? ?
      </Text>
    </View>
  );
};
