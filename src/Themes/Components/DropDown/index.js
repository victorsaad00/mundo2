import * as React from "react";
import {View} from '../../../components/Themed'
import { useTheme, Menu,Button,Divider} from 'react-native-paper';
import Colors from "../../../constants/Colors";
import DropDown from "react-native-paper-dropdown";
import { SafeAreaView } from "react-native";

const DropDownTravelers = ({items_dropdown, ...props}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const [items, setItems] = React.useState(items_dropdown);

  return (
  <View style={{width: "100%"}}>
      <Button_dropdown onPress={openMenu} />
      <Menu visible={visible}
          onDismiss={closeMenu}
          // anchor={<Button_dropdown onPress={openMenu} />}
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />

      </Menu>
  </View>
  )
};

const Button_dropdown = ({onPress,...props}) => {
  return(
    <View style={{marginHorizontal:16,backgroundColor:'red'}}>
      <Button onPress ={onPress}>
        Teste
      </Button>
    </View>
  )
}

export default DropDownTravelers;
