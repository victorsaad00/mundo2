import { View } from "../Themed";

import { useTheme,Dialog, Portal, Provider} from "react-native-paper";

import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import ProgressBar from "../ProgressBar/ProgressBar";

import Colors from "../../constants/Colors_app";


export default function AlertLevelComplete(props) {
  /*
    Estrutura da propriedade infoCard 
    {
        mapName: Nome do mapa,
        description: descrição do mapa,
        experience: experiencia do mapa,
        reward: recompensa do mapa,
        lock: Lista de elementos desbloqueados
    }   

    */
  const { alertLevelComplete, colors } = useTheme();
  const { mapName, description, experience, reward, lock } = props.infoCard;
  const hidedialog = props.hidedialog;
  const visible = props.visible;

  return (
    
    <Portal >
      <Dialog onDismiss={hidedialog} visible={visible} style={[alertLevelComplete.Cardstyle,{height: 700}]}>
        <View style={{marginHorizontal: 1,height: 500}}>
          <Dialog.Title
            style={[alertLevelComplete.titleStyle, { color: colors.second }]}
          >
            Desafio Concluído!
          </Dialog.Title>
          <Dialog.Title
            style={[alertLevelComplete.subtitleStyle, { color: colors.second }]}
          >
            {mapName}
          </Dialog.Title>
          <Dialog.Content>
            <View>
              <Text variant="black" style={[alertLevelComplete.descriptionStyle,alertLevelComplete.opacity]}>{description}</Text>
            </View>
          </Dialog.Content>
        </View>
        <View style={{height: 200 ,justifyContent: 'flex-end',paddingBottom: 8}}>
          <Dialog.Content>
            <View>
              <Text style={alertLevelComplete.opacity} size='mini' variant="black">Experiência: {experience}</Text>
              <Text style={alertLevelComplete.opacity} size='mini' variant="black">Recompensa: {reward}</Text>
            </View>
            <View style={{paddingVertical: 8}}>
              {lock.map((text) => <Text size='mini' key={text} style={{paddingTop: 8}} variant="second">{text}</Text>)}
            </View>
          </Dialog.Content>

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
