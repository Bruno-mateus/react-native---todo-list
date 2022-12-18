import { StyleSheet } from "react-native";
import {defaultTheme} from '../theme/styles'

const {colors,spaces} = defaultTheme

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical: 24,
    },
    header:{
    
        position:"relative",
        height:127,
        backgroundColor:colors.gray700,
        alignItems:"center",
        justifyContent:'center'           
    }
})
