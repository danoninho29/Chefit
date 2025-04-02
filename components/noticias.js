import {useState,} from "react"
import { StyleSheet,Button, Text, View, ImageBackground, ScrollView, TouchableOpacity, Modal } from 'react-native';
import Teste from "../components/teste"

const noticias = {
    1:{image: require('../assets/images/hypeDrink2.jpg'), text: 'Este é um exemplo de uma noticia, quer saber...'},
    2:{image: require('../assets/images/shakeAbacaxi.webp'), text: 'Este é um exemplo de uma noticia, quer saber...'},
    3:{image: require('../assets/images/cr7EstouComVoce.png'), text: 'Este é um exemplo de uma noticia, quer saber...'},
    4:{image: require('../assets/images/hypeDrink.jpg'), text: 'Este é um exemplo de uma noticia, quer saber...'},
    5:{image: require('../assets/images/hypeDrink.jpg'), text: 'Este é um exemplo de uma noticia, quer saber...'},
}

const Card = ({id})=>{
    //
    const noticia = noticias[id]
    if (!noticia) return null;
    //modais
    const [modalVisible, setModalVisible] = useState(false);
    return(
            <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
                <ImageBackground source={noticia.image} style={styles.cards} imageStyle={styles.image}>
                    <Modal animationType="slide" visible={modalVisible}>
                        <View style={styles.produto}>
                        <Card id={1} />
                            <Button onPress={()=>{setModalVisible(false)}} title="Ver os outros produtos" color="#ff5733"/>
                        </View>    
                    </Modal>
                    <Text style={styles.text}>{noticia.text}</Text>
                </ImageBackground>
            </TouchableOpacity>
    )
}
export default function screen(){
    return(
        <View>
            <Text style={styles.title}>Últimas notícias</Text>
            <ScrollView horizontal style={styles.scroll}>
                <Card id={1} />
                <Card id={2} />
                <Card id={3} />
                <Card id={4} />
                <Card id={5} />
            </ScrollView>
        </View>
    )
};


const styles = StyleSheet.create({
    scroll:{
        marginLeft:15,
    },
    cards:{
        width:250,
        height:250,
        margin:10,
        justifyContent: 'flex-end',
        padding:10,
    },
    image:{
        borderRadius:15
    },
    text:{
        color:'white',
        backgroundColor:'rgba(0,0,0, 0.5)',
        borderRadius:5,
        fontSize:15,
    },
    title:{
        fontSize:20,
        color:'white',
        margin:10,
        borderBottomColor:"white",
        border:25,
    },
    produto:{
        backgroundColor:'#2C3539',
        flex:1,
    },
    button:{
        bottom:100,
        color:"white"
    },
})