import { StyleSheet , Platform} from "react-native"

export const globalStyle = StyleSheet.create({
    text:{
      fontSize: 16,
      fontWeight:'bold',
      color: 'black',
    },
    logo: {
      flex: 1,
      backgroundColor: '#1A1A1D',
      ...(Platform.OS === 'web' ? { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } : { backgroundColor: '#000', marginTop: 30 }),
    },
    orangeButton:{
        backgroundColor:'#ff5733',
        borderRadius:15,
        marginTop:15,
        width:"100%",
        maxWidth:500,
        minHeight:55,
        maxHeight:60,
        height:"8%",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:5,
    },
    whiteTitle:{
        fontSize:30,
        fontWeight:'bold',
        color:"white",
    },
    blackTitle:{
      fontSize:30,
        fontWeight:'bold',
        color:"black",
    },
  })


