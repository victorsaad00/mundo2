import { View } from "../Themed";

import { Card,useTheme } from "react-native-paper";

import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import ProgressBar from "../ProgressBar/ProgressBar";


import Colors from "../../constants/Colors_app";
import IconLock from "../../images/iconLock.svg";

export default function CardMundo(props) {
  /*
    Estrutura da propriedade infoCard 
    {
        world: número do mundo,
        name_world: nome do mundo,
        progress: [fases_concluidas,total_fases],
        description: descrição do mundo
    }   

    */
  const { cardMundo } = useTheme();
  const { world, name_world, progress, description, status } = props.infoCard;
  const onclick = props.onClick;

  const perc_fases_concluidas =
    progress != undefined ? progress[0] / progress[1] : null;

  const text_progresso = status
    ? `${progress[0]}/${progress[1]} concluída`
    : "";

  const color_title = status ? "black" : "grey";
  const color_subtitle = status ? Colors.variant[10] : "grey";

  const description_component = status ? (
    <Text variant="black" style={cardMundo.descriptionStyle}>{description}</Text>
  ) : (
    <View
      style={[
        cardMundo.descriptionStyle,
        { alignItems: "center", justifyContent: "center" },
      ]}
    >
      <IconLock />
    </View>
  );

  return (
    <View style={{ width: "100%" }}>
      <Card style={cardMundo.Cardstyle}>
        <Card.Title
          title={world}
          subtitle={name_world}
          titleStyle={[cardMundo.titleStyle, { color: color_title }]}
          subtitleStyle={[cardMundo.subtitleStyle, { color: color_subtitle }]}
        />
        <Card.Content>
          <ProgressBar desactived={!status} progress={perc_fases_concluidas}>
            {text_progresso}
          </ProgressBar>
          {description_component}
        </Card.Content>

        <Card.Actions style={cardMundo.buttonStyle}>
          <Button
            desactived={!status}
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
