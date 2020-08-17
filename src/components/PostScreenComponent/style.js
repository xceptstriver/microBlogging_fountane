import { StyleSheet, Dimensions, Platform } from 'react-native'
import Dimension from '../../Theme/Dimension'
import Colors from '../../Theme/Colors'


export default StyleSheet.create({
    container: {
        paddingTop: 23
     },
     input: {
        margin: 15,
        height: 40,
        borderColor: 'rgba(217, 35, 45, 1)',
        borderWidth: 1
     },
     ContinueBtn:{ backgroundColor:Colors.RedThemeColor,borderRadius:8,padding:Dimension.padding10,alignItems:"center"},
     ContinueText:{color:Colors.white,fontSize:Dimension.font18},
   
})