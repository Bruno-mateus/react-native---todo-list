import { View,Text } from "react-native";

import { styles } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

interface ViewCheckbox {
    checked: boolean;
    label:string
   
}

export function Checkbox({label,checked}:ViewCheckbox){
    
    
    

    return (
      
        <View style={styles.container}>
        
            <View style={!checked?styles.boxNotSelected:styles.boxSelected}>
                {checked?(
                    <Icon name="check-circle" size={25} color="#5E60CE" />
                ):""}
            </View>
           
       
            <Text style={checked===true?styles.labelChecked:styles.label}>{label} </Text>
        </View>
         

                
            
        
    )
}