import { StyleSheet, Dimensions, Platform } from 'react-native'
import Dimension from '../../Theme/Dimension'
import Colors from '../../Theme/Colors'


export default StyleSheet.create({
   CardWrap:{borderWidth:2,borderColor:Colors.ProductBorderColor, backgroundColor:Colors.white,borderRadius:8,elevation:0,padding:Dimension.padding10,flex:1,},
   CardInnerWrap:{paddingLeft:0,paddingTop:0,paddingBottom:0,paddingRight:0,},
   CardTopWrap:{justifyContent:'space-between',flexDirection:"row"},
   ImgWrap:{alignItems:"center",justifyContent:"center",flex:1},
   Image:{height:Dimension.prdListViewImage,width:Dimension.prdListViewImage},
   Name:{color:Colors.PrimaryTextColor,fontSize:16,maxWidth:200},
   Brand:{color:Colors.lightGrayText,fontSize:12,marginVertical:5},
   OriginalPrice:{color:Colors.SecondaryTextColor,fontSize:14,marginRight:Dimension.margin10},
   PrdOff:{color:Colors.GreenColor,fontSize:12},
   PrdOfferPrice:{color:Colors.PrimaryTextColor,fontSize:16,},
   BtnWrap:{ backgroundColor:Colors.RedThemeColor,borderRadius:8,paddingVertical:Dimension.padding8,alignItems:"center",paddingHorizontal:Dimension.padding15},
   BtnText:{color:Colors.white,fontSize:Dimension.font12},
   ContinueBtn:{ backgroundColor:Colors.RedThemeColor,borderRadius:8,padding:Dimension.padding10,alignItems:"center"},
   ContinueText:{color:Colors.white,fontSize:Dimension.font16},
   textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: Colors.RedThemeColor,
    backgroundColor: '#FFFFFF',
    borderRadius:2
  }
})
