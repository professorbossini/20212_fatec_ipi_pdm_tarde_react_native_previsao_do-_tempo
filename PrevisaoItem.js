import React from 'react'
import {
    Image, 
    StyleSheet,
    Text,
    View
} from 'react-native'
import Cartao from './Cartao'
const PrevisaoItem = ({previsao}) => {
    const data = new Date(previsao.dt * 1000).toLocaleTimeString()
    const descricao = previsao.weather[0].description
    const tMin = `Min: ${previsao.main.temp_min}\u00B0`
    const tMax = `Max: ${previsao.main.temp_max}\u00B0`
    const umidade = `Umidade: ${previsao.main.humidity}%`
    const imgURI = `
        https://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`
    return (
        <Cartao style={estilos.cartao}>
            <View style={estilos.tela}>
                
                <Image 
                    style={estilos.imagem}
                    source={{uri: imgURI}}
                />
                
                <View>

                    <View style={estilos.primeiraLinha}>
                        <Text>{`${data} - ${descricao}`}</Text>
                    </View>

                    <View style={estilos.segundaLinha}>
                        <Text style={estilos.valor}>{tMin}</Text>
                        <Text style={estilos.valor}>{tMax}</Text>
                        <Text style={estilos.valor}>{umidade}</Text>
                    </View>

                </View>

            </View>
        </Cartao>
    )
}

const estilos = StyleSheet.create({
    cartao: {
        marginBottom: 4
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    valor: {
        marginHorizontal: 2
    }
})

export default PrevisaoItem
