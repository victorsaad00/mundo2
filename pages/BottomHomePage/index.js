import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme, Divider, BottomNavigation } from "react-native-paper";
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import { View } from "../../components/Themed";
import Alert from "../../components/Alert";
import HomePage from "../HomePage"

const HomePageBottom = () => <HomePage />;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const BottomHomePage = (props) => {
  const { colors } = useTheme();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'diario', title: 'Diário', icon: 'book' },
    { key: 'settings', title: 'Configurações', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomePageBottom,
    diario: AlbumsRoute,
    settings: RecentsRoute,
  });

  return (
    <BottomNavigation
        inactiveColor={colors.surface}
        safeAreaInsets={{top:200}}
        activeColor={"#c2c2c2"}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomHomePage;
