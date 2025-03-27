import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Platform ,NavLink} from 'react-native';
import Noticias from './components/noticias'



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={require('./assets/images/grenn-bottom.jpg')} style={styles.backgoundimage}>
        <Text style={styles.text}>Chefit</Text>
        </ImageBackground>
      </View>
      <View style={styles.main}>
        <Noticias />
      </View>
      <View style={styles.footer}></View> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3539',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundimage: img2,
    ...(Platform.OS === 'android' ? { backgroundColor: 'gray', marginTop:30 } : {}),
  },
  header:{
    top:0,
    height:70,
    padding:0,
  },
  text:{
    color:"black",
    fontSize:40,
    fontWeight:"bold",
  },
  footer:{
    backgroundColor:"white",
  },
  backgoundimage:{
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});