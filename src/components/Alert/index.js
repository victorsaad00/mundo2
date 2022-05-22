import { Button as ButtonApp, useTheme,Dialog, Portal,Modal } from "react-native-paper";
import { View } from "../Themed";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";

const Alert = ({size,...props}) => {
    const { alert, colors } = useTheme();
    const { title, description} = props.infoCard;
    const hidedialog = props.hidedialog;
    const visible = props.visible;

  return (
    <Portal >
      <Dialog onDismiss={hidedialog} visible={visible} style={[alert.Alertstyle]}>
        <Dialog.Title
        style={[alert.titleStyle, { color: colors.second }]}
        >
            {title}
        </Dialog.Title>
        <Dialog.Content>
            <View>
                <Text variant="black" style={[alert.descriptionStyle,alert.opacity]}>{description}</Text>
            </View>
        </Dialog.Content>
        <Dialog.Actions style={alert.buttonStyle}>
            <Button
                size='small'
                onClick={hidedialog}

            >
                Continuar
            </Button>
        </Dialog.Actions>
      </Dialog>
      {/* <Modal onDismiss={hidedialog} visible={visible} contentContainerStyle={[alert.Alertstyle]}>
        <View
          style={[alert.titleStyle, { color: colors.second }]}
          >
              <Text>
                {title}
              </Text>
          </View>
          <View>
              <View>
                  <Text variant="black" style={[alert.descriptionStyle,alert.opacity]}>{description}</Text>
              </View>
          </View>
          <View style={alert.buttonStyle}>
            <Button
                  size='small'
                  onClick={hidedialog}

              >
                  Continuar
              </Button>
          </View>
      </Modal> */}

    </Portal>
  );
};

export default Alert;
