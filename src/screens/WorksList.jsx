import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'
import image7 from '../assets/images/image7.png'
import { maxLength } from '../utils/maxLength'

export default function WorksList() {
    const books = [
        { name: 'Sabbai Sayyor', image: image1 },
        { name: 'Sabbai Sayyor', image: image2 },
        { name: 'Sabbai Sayyor', image: image3 },
        { name: 'Sabbai Sayyor', image: image4 },
        { name: 'Sabbai Sayyor', image: image5 },
        { name: 'Sabbai Sayyor', image: image6 },
        { name: 'Sabbai Sayyor', image: image7 },
    ]
    const text = 'Test test test test Test test test test Test test test test Test test test test Test test test test '

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{ backgroundColor: '#eeeeee', paddingTop: 10 }}>
            {books.map((item) => (
                <View style={styles.card}>
                    <View
                        style={styles.imageContainer}>
                        <Image source={item.image} style={{ borderBottomLeftRadius: 10, borderTopLeftRadius: 10, width: 90, height: 135 }} />
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={{
                            fontSize: 18,
                            color: '#262626',
                            fontWeight: 'bold',
                            marginBottom: 5,
                        }}>
                            {item.name}
                        </Text>
                        <Text style={{ color: '#717171' }}>{maxLength(text, 150)}</Text>
                    </View>
                </View>
            ))}

            <View style={{ marginBottom: 10 }} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        elevation: 3,
        width: '95%',
        borderRadius: 10,
        height: 150,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    imageContainer: {
        width: '28%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    textContainer: {
        width: '72%',
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
})
