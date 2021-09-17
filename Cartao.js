import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
const Cartao = (props) => {
    return (
        <View
            style={{...estilos.cartao, ...props.style}}
        >
            {props.children}
        </View>
    )
}

export default Cartao

const estilos = StyleSheet.create({
    cartao: {
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 4,
        padding: 12,
        borderRadius: 12
    }
})