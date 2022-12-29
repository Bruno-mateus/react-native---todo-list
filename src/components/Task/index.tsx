import { Text, TouchableOpacity, View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";
import { ReactNode } from "react";

interface TaskProps{
    children: ReactNode
    onDelete:(id:string)=>void
}

export function Task({children,onDelete}:TaskProps){
   
    return(
        <View style={styles.container}>
                {children}
                <TouchableOpacity onPress={()=>onDelete()} >
                    <Icon name="trash-o" color="#808080" size={20}/>
                </TouchableOpacity>  
        </View>
    )
}