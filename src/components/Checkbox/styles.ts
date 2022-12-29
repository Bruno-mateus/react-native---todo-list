import { StyleSheet } from "react-native";
import {defaultTheme} from '../../theme/styles'

const {colors,spaces} = defaultTheme

export const styles = StyleSheet.create(
    {
        container:{
            display:"flex",
            flexDirection:"row",
            alignItems:"center"
        },
        boxNotSelected:{
            width:25,
            height:25,
            borderStyle:"solid",
            borderColor:colors.blueDark,
            borderWidth:2,
            borderRadius:999,
            alignItems: "center",
            justifyContent:'center',
            textAlign: 'center',
        },
        boxSelected:{
            width:25,
            height:25,
            borderRadius:999,
            alignItems: "center",
            justifyContent:'center',
            textAlign: 'center',
            backgroundColor:'white'
        },
        label:{
            color:"#fff",
            marginLeft:8
        },
        labelChecked:{
            color:colors.gray300,
            marginLeft:8,
            textDecorationLine:'line-through'
        }
    }
)