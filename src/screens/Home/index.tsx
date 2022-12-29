import { Image, Text, TextInput, TouchableOpacity, View,Alert ,FlatList,StatusBar} from "react-native";
import {useState} from 'react'

import uuid from 'react-native-uuid';

import {styles} from './styles'
import { Task } from "../../components/Task";
import { Checkbox } from "../../components/Checkbox";
import {defaultTheme} from '../../theme/styles'

const {colors} = defaultTheme


export interface TodoProps{
    id:string,
    description: string,
    finished: boolean
}



export function Home(){
    const [tasks,setTasks] = useState<TodoProps[]>([])
    const [description,setDescription] = useState("")
    

    function handleCreateTask(){
    
        const task = {
            id:uuid.v4() as string,
            description,
            finished: false
        }

        setTasks(prevState=>[...prevState,task])
        setDescription("")
        console.log(tasks)
    }
    
function toggleTaskAsFinished(id:string){
    const checkedTasks = tasks.map(task =>{
        if(task.id === id) {
            task.finished = !task.finished   
             
        }
        return task
    })
    setTasks([...checkedTasks])
}

 function deleteTasks(id:string){

   Alert.alert('Remover tarefa', "Deseja realmente remover esta terefa?",[
        {
            text:"Sim",
            onPress:()=>{
                const filterTasksNotDeleted = tasks.filter(task=>task.id != id)
                setTasks([...filterTasksNotDeleted])
            }
        },
        {
            text:"Não",
            style:'cancel'
        }
    ])


   
   
}



const finishedTasks = tasks.filter(task=>task.finished===true)
  
 

    return(
        <View style={styles.container}>
             <StatusBar
                barStyle={'light-content'}
                backgroundColor={colors.gray700}
                translucent={true}
            />
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
                    placeholderTextColor={"#808080"}
                    onChangeText={(e)=>setDescription(e)}
                    value={description}
                        />
                        <TouchableOpacity style={styles.buttonAdd} onPress={handleCreateTask}>
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
                                {tasks.length}
                            </Text>
                        </View>
                        <View style={styles.statusTasks}>
                            <Text style={{color:"#5E60CE",fontWeight:'bold', marginRight:8}}>
                                Concluídas
                            
                            </Text>
                            <Text style={{color:"#5E60CE",fontWeight:'bold',borderRadius:999,
                             backgroundColor:"#262626", paddingVertical:2, paddingHorizontal:8}}>{finishedTasks.length}</Text>
                        </View>

                    </View>
                    <View>
                        {tasks.length>0?
                          <FlatList
                            data={tasks}
                            keyExtractor={item=>item.id}
                            renderItem={
                                ({item})=>(
                                    <Task onDelete={()=>deleteTasks(item.id)}>
                                        <TouchableOpacity onPress={()=>toggleTaskAsFinished(item.id)}>
                                            <Checkbox
                                                checked={item.finished}
                                                label={item.description}
                                            />
                                        </TouchableOpacity>
                                                            
                                        <Text>
                                                            
                                        </Text>
                                    </Task>
                                )
                                                        
                                                    
                                                    
                            }
                        />:
                        <View style={styles.containerWithoutTasks}>
                            <Image
                                source={require('../../assets/Clipboard.png')}
                            />
                            <Text style={styles.h2}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.p}>Crie tarefas e organize seus itens a fazer</Text>

                        </View>
                        }

                    </View>
                </View>
  
            </View>
        </View>
    )
}