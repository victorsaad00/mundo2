import { Button as ButtonApp, useTheme,Dialog, Portal,Modal } from "react-native-paper";
import { ScrollView, TouchableOpacity } from 'react-native';
import { View } from "../Themed";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";

const AlertDiario = ({size,...props}) => {
    const { alert, colors } = useTheme();
    const { title, description} = props.infoCard;
    const hidedialog = props.hidedialog;
    const visible = props.visible;

  return (
    <Portal>
      <Dialog onDismiss={hidedialog} visible={visible} style={[alert.AlertDiarioDiariostyle]}>
        <Dialog.Title
        style={[alert.titleDiarioStyle, { color: colors.flat }]}
        >
            {title}
        </Dialog.Title>
        <Dialog.ScrollArea  >
            <ScrollView contentContainerStyle={{width: "100%",height: 710}}>
                <Dialog.Content>
                    <Text variant="flat" style={[alert.descriptionDiarioStyle]}>{description}</Text>
                </Dialog.Content>
            </ScrollView> 
        </Dialog.ScrollArea>
        
        <Dialog.Actions style={[alert.buttonStyle,]}>
            <TouchableOpacity
                onPress={hidedialog}

            >
                <Text size="medium" style={{backgroundColor: "transparent",color: "#fff"}}>Continuar</Text>
            </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AlertDiario;
