import { StyleSheet } from "react-native";
import {defaultTheme} from '../theme/styles'

const {colors,spaces} = defaultTheme

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 24,
        backgroundColor: colors.gray600
    },
    header:{
        height:127,
        backgroundColor:colors.gray700,
        alignItems:"center",
        justifyContent:'center'           
    },
    content:{
        paddingHorizontal:24,
        position:"relative",
        alignItems:"center"
    },
    form:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:"center",
        position:'absolute',
       
        bottom:-35,
    },
    input:{
        backgroundColor:colors.gray500,
        padding:16,
        flex:1,
        marginRight:4,
        borderRadius:5
    },
    buttonAdd:{
        padding:19,
        backgroundColor:colors.blueDark,
        width:52,
        alignItems:'center',
        borderRadius:5
    }
})
