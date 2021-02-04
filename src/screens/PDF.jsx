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
