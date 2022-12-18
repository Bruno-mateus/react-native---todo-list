import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import {styles} from './styles'

export function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                     source={require('../../assets/Logo.png')}
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
                <View style={styles.tasksContainer}>
                    <View style={styles.headerTasks}>
                        <View style={styles.statusTasks}>
                            <Text style={{color:"#1E6F9F",fontWeight:'bold'}}>
                                Criadas 
                            </Text>
                            <Text style={{color:"#1E6F9F",fontWeight:'bold',marginLeft:8, 
                            borderRadius:999, backgroundColor:"#262626", paddingVertical:2, paddingHorizontal:8}}>
                                0 
                            </Text>
                        </View>
                        <View style={styles.statusTasks}>
                            <Text style={{color:"#5E60CE",fontWeight:'bold', marginRight:8}}>
                                Concluídas
                            
                            </Text>
                            <Text style={{color:"#5E60CE",fontWeight:'bold',borderRadius:999,
                             backgroundColor:"#262626", paddingVertical:2, paddingHorizontal:8}}>0</Text>
                        </View>

                    </View>
                </View>
  
            </View>
        </View>
    )
}