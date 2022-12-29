import { StyleSheet } from "react-native";
import {defaultTheme} from '../../theme/styles'

const{ colors,spaces} = defaultTheme

export const styles = StyleSheet.create({
    container:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:colors.gray500,
        padding:spaces.fontSizes.sm,
        borderRadius:10
    }
})