import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import PDFReader from 'rn-pdf-reader-js'

export default function WorkDetail({ route }) {
    const { book } = route.params

    return (
        <PDFReader
            source={{
                uri: book.pdf,
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})
