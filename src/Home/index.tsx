import { Image, View } from "react-native";
import {styles} from './styles'

export function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                     source={require('../assets/Logo.png')}
                />

            </View>
        </View>
    )
}