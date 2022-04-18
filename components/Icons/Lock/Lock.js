import { Text, View } from "../../Themed";

import styles from "./StyleLock.js"



export default function IconColor(props){

    const size = props.size == null ? 40 : props.size;

    return ( 
        <View style={[styles.lock,{width: size,height: size}]}>
            <View style={styles.group}>
                <View styles={styles.vector}/>
            </View>
        </View>
            
    );
}
