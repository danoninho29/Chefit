import { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  ScrollView, 
  TouchableOpacity,
  Modal,
  BackHandler,
  Platform,
} from "react-native";

const noticias = {
  1: {
    image: require("../assets/images/hypeDrink2.jpg"),
    text: "Sinta o poder da energia inteligente com o HypeDrink da Herbalife. Uma explosão de sabor, foco e disposição em cada gole. Seja para começar o dia com tudo ou encarar aquele treino pesado, o HypeDrink é seu parceiro ideal. Energia natural e duradoura. Sabor irresistível. Sem adição de açúcares. Com vitaminas do complexo B. Ideal para performance física e mental. Acorde seus sentidos. Eleve sua energia. Sinta o hype! Experimente o HypeDrink e descubra o que é estar no controle — com saúde, foco e atitude. HypeDrink Herbalife. Energia que acompanha o seu ritmo.",
  },
  2: {
    image: require("../assets/images/shakeAbacaxi.webp"),
    text: "Novo sabor de Abacaxi! Nada melhor do que começar o dia com energia e bem-estar. O Shake Herbalife de Abacaxi combina o sabor tropical e refrescante do abacaxi com uma fórmula nutricional equilibrada que ajuda na saciedade, controle de peso e reposição de nutrientes essenciais.",
  },
  3: {
    image: require("../assets/images/cr7EstouComVoce.png"),
    text: "Equilíbrio e saúde com o poder dos fitoterápicos Herbalife. A linha Herba foi desenvolvida para apoiar o seu corpo de forma natural, com ingredientes de origem vegetal que auxiliam no seu bem-estar diário.",
  },
  4: {
    image: require("../assets/images/liftOffLimao.jpg"),
    text: "A explosão de energia que você já conhece, em um novo sabor: cítrico, leve e refrescante.Conheça este suplemento alimentar com um blend exclusivo de cafeína + taurina que estimula o sistema nervoso central. Uma combinação de SABOR e REFRESCÂNCIA que te ajuda a ter mais ENERGIA e CONCENTRAÇÃO nas suas atividades do dia a dia.Muito mais que uma bebida energética, além de  ser baixo em calorias, o Liftoff contém vitaminas do Complexo B e C que auxiliam no metabolismo energético + Biotina que contribui para a manutenção do cabelo e da pele.",
  },
  5: {
    image: require("../assets/images/fiberConcetrade.jpg"),
    text: "O Fiber Concentrate é uma mistura concentrada para preparar uma bebida deliciosa que combina os benefícios das fibras com a hidratação que seu corpo precisa.Cada porção de 15 ml contém cerca de 3g de fibra solúvel de milho, um ingrediente que auxilia o bom funcionamento do intestino e contribui para atingir a ingestão diária recomendada de fibras.Disponível nos irresistíveis sabores manga, uva e limão com mel, o Fiber Concentrate é perfeito para quem busca uma maneira prática de aumentar a ingestão de fibras, sem comprometer o sabor e a hidratação.",
  },
};

const Card = ({ id }) => {
  const noticia = noticias[id];
  if (!noticia) return null;

  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <ImageBackground
        source={noticia.image}
        style={styles.cards}
        imageStyle={styles.image}
      >
        <Modal animationType="slide" visible={modalVisible}>
          <View style={styles.openNoticia}>
            <ScrollView>
            <Image source={noticia.image} style={styles.openImage} />
            <Text style={styles.openText}>{noticia.text}</Text>
            </ScrollView>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.voltar}
            >
              <Text style={styles.voltarText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Text style={styles.text}>
          {noticia.text.length > 20
            ? noticia.text.substring(0, 20) + "..."
            : noticia.text}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default function Screen() {
  return (
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
  );
}

const styles = StyleSheet.create({
  scroll: {
    marginLeft: 15,
  },
  cards: {
    width: 250,
    height: 250,
    margin: 10,
    justifyContent: "flex-end",
  },
  image: {
    borderRadius: 15,
    justifyContent:'center'
  },
  text: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0, 0.5)",
    padding: 10,
    fontSize: 15,
    width: "100%",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  title: {
    fontSize: 22,
    color: "white",
    margin: 8,
    fontWeight: "bold",
  },
  openNoticia: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    ...(Platform.OS==='web'?{alignItems:'center',}:{}),
  },
  openImage: {
    maxWidth: 400,
    maxHeight: 400,
  },
  openText: {
    fontSize: 22,
    color: "white",
    margin: 15,
    maxWidth:400
  },
  voltar: {
    backgroundColor: "#ff5733",
    paddingVertical: 12,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  voltarText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
