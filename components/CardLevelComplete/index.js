import { View } from "../Themed";

import { Card,useTheme } from "react-native-paper";

import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import ProgressBar from "../ProgressBar/ProgressBar";

import Colors from "../../constants/Colors_app";


export default function CardLevelComplete(props) {
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
  const { cardLevelComplete, colors } = useTheme();
  const { mapName, description, experience, reward, lock } = props.infoCard;
  const onclick = props.onClick;

  return (
    <View style={{ width: "100%" }}>
      <Card style={cardLevelComplete.Cardstyle}>
        <Card.Title
          title='Desafio Concluído!'
          subtitle={mapName}
          titleStyle={[cardLevelComplete.titleStyle, { color: colors.second }]}
          subtitleStyle={[cardLevelComplete.subtitleStyle, { color: colors.second }]}
        />
        <Card.Content>
          <View>
            <Text variant="black" style={cardLevelComplete.descriptionStyle}>{description}</Text>
          </View>
          <View>
            <Text size='small' variant="black">Experiência: {experience}</Text>
            <Text size='small' variant="black">Recompensa: {reward}</Text>
            {lock.map((text) => <Text style={{fontSize:16,paddingVertical: 4}} variant="second">{text}</Text>)}
          </View>
        </Card.Content>

        <Card.Actions style={cardLevelComplete.buttonStyle}>
          <Button
            style_button={"second_color_app"}
            onClick={onclick}
          >
            Entrar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
