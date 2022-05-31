import { View } from "../Themed";
import { ScrollView } from 'react-native';
import { useTheme,Dialog, Portal, Provider} from "react-native-paper";

import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import ProgressBar from "../ProgressBar/ProgressBar";

import Colors from "../../constants/Colors_app";


export default function AlertInfo(props) {
  /*
    Estrutura da propriedade infoCard 
    {
        mapName: Nome do mapa,
        description: descrição do mapa,

    }   

    */
  const { alertLevelComplete, colors } = useTheme();
  const { mapName, description,type} = props.infoCard;
  const hidedialog = props.hidedialog;
  const visible = props.visible;

  return (
    
    <Portal >
      <Dialog onDismiss={hidedialog} visible={visible} style={[alertLevelComplete.Cardstyle,{height: 700}]}>
        <View style={{marginHorizontal: 1,height: 600,borderRadius:16}}>
          <Dialog.Title
            style={[alertLevelComplete.titleStyle, { color: colors.second }]}
          >
            {type}
          </Dialog.Title>
          <Dialog.Title
            style={[alertLevelComplete.subtitleStyle, { color: colors.second }]}
          >
            {mapName}
          </Dialog.Title>
          <Dialog.ScrollArea  >
            <ScrollView contentContainerStyle={{width: "100%",height: 710}}>
                <Dialog.Content>
                    <Text variant="black" style={[alertLevelComplete.descriptionStyle,alertLevelComplete.opacity]}>{description}</Text>
                </Dialog.Content>
            </ScrollView> 
          </Dialog.ScrollArea>
          
        </View>
        <View style={{height: 100 ,justifyContent: 'flex-end',paddingBottom: 8}}>

          <Dialog.Actions style={alertLevelComplete.buttonStyle}>
            <Button
              size='small'
              onClick={hidedialog}

            >
              Continuar
            </Button>
          </Dialog.Actions>
        </View>
      </Dialog>
    </Portal>
  );
}
