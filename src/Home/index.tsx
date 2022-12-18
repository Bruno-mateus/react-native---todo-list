import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import {styles} from './styles'

export function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                     source={require('../assets/Logo.png')}
                />
            </View>
            <View style={styles.content}>
    
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                     placeholder="Adicione uma tarefa"
                
                        />
                        <TouchableOpacity style={styles.buttonAdd}>
                         <Text>
                            +
                            </Text>
                        </TouchableOpacity>
                </View>
  
            </View>
        </View>
    )
}