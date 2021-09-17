import React, { useState } from 'react';
import { Button,  FlatList, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import PrevisaoItem from './PrevisaoItem';

export default function App() {
  const [cidade, setCidade] = useState('')
  const [previsoes, setPrevisoes] = useState([])
  const capturarCidade = (cidade) => {
    setCidade(cidade)
  }

  const obterPrevisoes = () => {
    setPrevisoes([])
    const url = `${endPoint}${cidade}`
    console.log(url)
    fetch(url)
    .then (dados => dados.json())
    .then(dados => {
      dados = dados['list'].map((item) => ({...item, key: item.dt.toString()}))
      setPrevisoes(dados)
      Keyboard.dismiss()
    })
  }
  const idioma = 'pt_br'
  const unidade = 'metric'
  const quantidade = 10
  const apiKey = 'ef0b0973b783e0614ac87612ec04344b'
  const endPoint = `https://api.openweathermap.org/data/2.5/forecast?lang=${idioma}&units=${unidade}&cnt=${quantidade}&appid=${apiKey}&q=`
 
  return (
    <View style={styles.container}>
      
      <View style={styles.entrada}>
        <TextInput 
          style={styles.nomeCidade}
          placeholder='Digite o nome de uma cidade'
          onChangeText={capturarCidade}
          value={cidade}
        />
        <Button 
          title="OK"
          onPress={obterPrevisoes}
        />
      </View>

      <View>
        <FlatList 
          data={previsoes} //[sol, chuva, neve]
          renderItem={
            (previsao) => (
              <PrevisaoItem previsao={previsao.item} />
            )
          }
        />
      </View>

    </View>
  );
}

// [
//   {dt: 12234, description: 'sol'},
//   {dt: 66554433, description: 'chuva'}
// ]

// [
//   {
//     item: { dt: 12234, description: 'sol'}
//   },
//   {
//     item: {dt: 66554433, description: 'chuva'}
//   }
// ]


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 40
  },
  entrada: {
    flexDirection: 'column',
    marginBottom: 8
  },
  nomeCidade: {
    padding: 12,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    marginBottom: 4
  }
});
