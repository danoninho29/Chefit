import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function () {
  const anos = {
    2020: { texto: 'Em 2020, Oscar, apaixonado por nutrição e saúde, percebeu a dificuldade das pessoas em manter uma alimentação equilibrada no dia a dia corrido. Começou a preparar marmitas saudáveis em casa, com foco em refeições de baixa caloria, pouca gordura e ingredientes naturais. Cada embalagem vinha com uma tabela nutricional simples, destacando calorias, açúcares e proteínas. As entregas eram feitas de bicicleta nos bairros próximos. O boca a boca fez a ideia ganhar força rapidamente.' },
    2021: { texto: 'Em 2021, Com o aumento da demanda, Oscar alugou uma cozinha industrial e contratou uma nutricionista para elaborar um cardápio equilibrado e variado. As refeições passaram a conter selos de identificação como “low carb”, “zero açúcar”, “proteico” e “alto teor de fibras”. O público-alvo incluía desde atletas até pessoas que buscavam emagrecimento com praticidade. As marmitas foram padronizadas com QR codes que levavam a uma página com os dados nutricionais detalhados de cada prato.' },
    2022: { texto: 'Em 2022, Oscar investiu no desenvolvimento do aplicativo Chefit. O app permitia que o cliente filtrasse os pratos por meta (emagrecer, ganhar massa, controlar o colesterol) e por restrições (sem lactose, vegano, sem glúten). Também foi implementado um sistema de retirada rápida: o cliente fazia o pedido no app e recebia um alerta assim que a refeição estivesse pronta. Essa praticidade aumentou muito as vendas, especialmente entre trabalhadores de escritório.' },
    2023: { texto: 'Em 2023, Oscar percebeu que os clientes queriam mais do que comidas prontas: eles queriam orientação alimentar prática. Criou então os “Combos Funcionais”, como o Combo Energia (com suco detox, sanduíche proteico e barrinha sem açúcar). O app foi atualizado para permitir que o cliente registrasse metas, alergias, preferências e histórico de pedidos. A Chefit também começou a incluir mensagens motivacionais nas embalagens, incentivando hábitos saudáveis e trazendo o cliente para mais perto do propósito da marca.' },
    2024: { texto: 'Em 2024, A Chefit recebeu um selo nacional de Transparência Nutricional e foi destaque em programas de TV e revistas de alimentação saudável. Oscar lançou a primeira unidade franqueada em outra cidade, mantendo os mesmos padrões de qualidade e valores. As embalagens foram reformuladas com um layout moderno, incluindo selos coloridos para proteínas, fibras, calorias e açúcares. O sucesso foi tanto que uma rede de academias se tornou parceira oficial, distribuindo os produtos nos próprios estabelecimentos.' },
  };
 
  const [anoSelecionado, setAnoSelecionado] = useState(2020);

  return (
    <View style={styles.view}>
      <View style={styles.card}>
      <Text style={{ color:'white', fontSize: 26, marginBottom:10 }}>História do fundador</Text>
        <ImageBackground
          source={require('../assets/images/fotoPerfil.webp')}
          style={styles.person}
          imageStyle={styles.image}
        >
          <Text style={textos.person}>Oscar Reis</Text>
        </ImageBackground>

        <Text style={{ color: 'white', marginTop: 10 }}>{anos[anoSelecionado].texto}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          {[2020, 2021, 2022, 2023, 2024].map((ano) => (
            <TouchableOpacity key={ano} onPress={() => setAnoSelecionado(ano)} style={styles.botao}>
              <Text style={styles.botaoTexto}>{ano}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'black',
    padding: 10,
    maxWidth:600,
    height:'100%',
    width:'100%'
  },
  card: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'rgba(255, 87, 51 ,0.5)',
    marginTop: 10,
  },
  person: {
    height: 200,
    width: 200,
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  image: {
    borderRadius: 15,
  },
  botao: {
    backgroundColor: '#ff5733',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const textos = StyleSheet.create({
  person: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    padding: 10,
    fontSize: 15,
    width: '100%',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    textAlign: 'center',
  },
});
