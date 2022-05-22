import { Button as ButtonApp, useTheme } from "react-native-paper";
import TravelersIcon from "../../assets/Icons/TravelersIcon";
import Text from "../../Themes/Components/Text/Text";
import { View } from "react-native";
import Input from "../../Themes/Components/Input/Input";
import loginPageStyles from './LoginPageStyles.js'
import Button from "../../Themes/Components/Button/Button";

const LoginPage = (props) => {
  
  return (
    <View style={loginPageStyles.view}>
        <View style={{paddingVertical:16}}>
            <Text variant="black" size="small" >
                Traveler's Code
            </Text>
        </View>
        
        <View style={{paddingBottom:16}}>
            <TravelersIcon />
        </View>
        <View style={{paddingVertical:32}}>
            <Text variant="second">
                LOGAR
            </Text>
        </View>
        <Input label="Email" variant="outlined" size="expansive" />
        <Input label="Senha" variant="outlined" size="expansive"/>
       
        <View style={{paddingVertical:16,width: "100%",alignItems:"center"}}>
            <Button onClick={()=>{console.log("ENTRAR!")}}>Logar</Button> 
        </View> 
        <View style={{paddingVertical:8,width: "100%",alignItems:"center"}}>
            <Button size ="medium" onClick={()=>{console.log("Entrar sem logar!")}}>Entrar sem logar</Button> 
        </View> 
        <View style={{paddingVertical:16,width: "100%",alignItems:"center"}}>
            <Button mode ="flat" size="small" style={{width:"100%"}} onClick={()=>{console.log("Esqueceu a senha!")}}>Esqueceu a senha?</Button>
        </View>
        <View style={{paddingVertical:16,width: "100%",alignItems:"center"}}>
            <Button mode ="flat" size="small" onClick={()=>{console.log("Registrar!")}}>Registrar</Button>
        </View>
        
        
       
        
    </View>
  );
};

export default LoginPage;
