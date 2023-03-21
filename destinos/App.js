import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Lusitana_400Regular,
  Lusitana_700Bold,
} from '@expo-google-fonts/lusitana';

export default function App() {
  let [fontsLoaded] = useFonts({ Lusitana_400Regular, Lusitana_700Bold });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}> Os melhores destinos para a Europa</Text>

        <FlatList
          data={arrayLugares}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.subTitulo}> Motivos:{item.motivos} </Text>

              <Text style={styles.subTitulos}> Destinos: {item.destinos} </Text>

              <View style={styles.tituloimg}>
                
                <Image style={styles.img} source={item.capa} />
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf@f1',
    padding: 8,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 25,
    color: 'ff5a73',
    fontFamily: 'Lusitana_400Regular',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },

  img: {
    borderRadius: 30,
    width: 300,
    height: 300,
    resizeMode: 'center',
    marginBottom: 40,
  },

  subTitulo: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },

  tituloimg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const arrayLugares = [
  {
    destinos: 'Espanha',
    capa: require('./espanha.jpg'),
    motivos:
      ' A Espanha tem uma história e cultura ricas que podem ser exploradas através de seus monumentos, museus e festivais tradicionais.Com um clima quente e ensolarado durante a maior parte do ano, a Espanha oferece várias opções de praias para os viajantes desfrutarem.',
  },

  {
    destinos: 'Irlanda',
    capa: require('./irlanda.jpeg'),
    motivos:
      'A Irlanda é conhecida por sua beleza natural, com paisagens deslumbrantes, como falésias, lagos, montanhas e campos verdes.Os irlandeses são conhecidos por sua hospitalidade calorosa e amigável, tornando a experiência do viajante na Irlanda ainda mais agradável.',
  },

  {
    destinos: 'Alemanha',
    capa: require('./alemanha.jpg'),
    motivos:
      'A Alemanha é um país com uma rica história e patrimônio cultural, com cidades medievais, castelos, museus e locais históricos.A Alemanha é conhecida por sua cultura de cerveja e gastronomia, com muitas cervejarias, festivais de cerveja e pratos tradicionais, como salsichas e pretzels. A Alemanha tem uma variedade de paisagens naturais deslumbrantes, como montanhas, lagos e florestas, ideais para caminhadas, ciclismo e atividades ao ar livre.',
  },

  {
    destinos: 'Croácia',
    capa: require('./croatia.jpeg'),
    motivos:
      'A Croácia tem uma costa impressionante com praias de águas cristalinas e uma grande variedade de ilhas para explorar.A Croácia tem vários parques naturais com paisagens deslumbrantes, cachoeiras e trilhas para caminhadas, tornando-a um destino popular para os amantes da natureza e do ecoturismo.',
  },
];
