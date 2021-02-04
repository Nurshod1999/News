import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, StyleSheet, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import { n } from '../utils/normalize'

export default function WorkDetail({ route }) {
    const { book } = route.params
    const navigation = useNavigation()
    const [favourite, setFavourite] = useState(false)

    useEffect(() => {
        AsyncStorage.getItem('favourites').then((value) => {
            if (JSON.parse(value).filter((i) => i.id === book.id).length === 1) {
                setFavourite(true)
            }
        })
    }, [book.id])

    async function doFavourite() {
        const favourites = await AsyncStorage.getItem('favourites')

        if (favourite) {
            AsyncStorage.setItem(
                'favourites',
                JSON.stringify(JSON.parse(favourites || '[]').filter((fav) => fav.id !== book.id)),
            )
            setFavourite(false)
            return
        }

        AsyncStorage.setItem('favourites', JSON.stringify([...JSON.parse(favourites || '[]'), book]))
        setFavourite(true)
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar />

            <View style={styles.back}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon.ChevronLeft color="white" width={30} height={30} />
                </TouchableOpacity>
            </View>

            <View style={styles.like}>
                <TouchableOpacity onPress={() => doFavourite()}>
                    <Icon.Heart
                        color={favourite ? 'red' : 'white'}
                        fill={favourite ? 'red' : 'none'} />
                </TouchableOpacity>
            </View>

            <View style={styles.column}>
                <Image blurRadius={2} source={book.image} style={styles.blurImage} />

                <View style={styles.origImage}>
                    <Image source={book.image} style={styles.image} />
                </View>
            </View>

            <View style={styles.bookTitle}>
                <Text style={styles.bookTitleItem}>
                    {book.name}
                </Text>

                <Text style={{ color: 'white' }}>Alisher Navoiy</Text>
            </View>

            <View style={styles.tabReyting}>
                <View style={{ width: '25%' }}>
                    <Text style={{ ...styles.tabReytingItem, fontSize: 16 }}>Reyting</Text>
                    <Text style={styles.tabReytingItem}>5.0</Text>
                </View>

                <View style={{ width: '25%' }}>
                    <Text style={{ ...styles.tabReytingItem, fontSize: 16 }}>Sahifalar</Text>
                    <Text style={styles.tabReytingItem}>240</Text>
                </View>

                <View style={{ width: '25%' }}>
                    <Text style={{ ...styles.tabReytingItem, fontSize: 16 }}>Til</Text>
                    <Text style={styles.tabReytingItem}>UZB</Text>
                </View>

                <View style={{ width: '25%' }}>
                    <Text style={{ ...styles.tabReytingItem, fontSize: 16 }}>Audio kitob</Text>
                    <Text style={styles.tabReytingItem}>Mavjud emas</Text>
                </View>
            </View>

            <View style={styles.containerRead}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: '50%', borderRightColor: '#fff', borderRightWidth: 1 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('PDF', { book })}>
                            <Text style={{ ...styles.readTitle }}>
                                Kitobni o`qish
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: '50%',
                        borderLeftColor: '#fff',
                        borderLeftWidth: 1,
                        backgroundColor: '#898888',
                        borderTopRightRadius: 15,
                        borderBottomRightRadius: 15,
                    }}>
                        <Text style={styles.readTitle}>Audio kitobni eshitish</Text>
                    </View>
                </View>
            </View>

            <View style={styles.aboutContainer}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#262626' }}>
                    Nima haqida?
                </Text>

                <Text style={{ color: '#717171', marginBottom: 10 }}>
                    Alisher Navoiy juda yaxshi inson bo'lgan. Test for test, test for test
                </Text>

                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#262626' }}>
                    Nima haqida?
                </Text>

                <Text style={{ color: '#717171' }}>
                    Alisher Navoiy juda yaxshi inson bo'lgan. Test for test, test for test
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    bookTitle: {
        width: '100%',
        position: 'absolute',
        marginTop: '90%',
        alignItems: 'center',
    },
    column: {
        height: 550,
    },
    blurImage: {
        width: '100%',
        height: '100%',
        opacity: 0.9,
    },
    image: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    origImage: {
        width: '100%',
        height: 400,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookTitleItem: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    tabReyting: {
        width: '100%',
        position: 'absolute',
        marginTop: n(400),
        flexDirection: 'row',
    },
    tabReytingItem: {
        color: 'white',
        textAlign: 'center',
    },
    containerRead: {
        height: 50,
        backgroundColor: '#191723',
        bottom: 28,
        elevation: 5,
        marginHorizontal: 30,
        borderRadius: 15,
    },
    readTitle: {
        color: 'white',
        marginTop: 15,
        textAlign: 'center',
    },
    aboutContainer: {
        marginHorizontal: 30,
    },
    back: {
        position: 'absolute',
        zIndex: 1,
        top: 10,
        left: 10,
        width: 40,
        height: 40,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
    like: {
        position: 'absolute',
        zIndex: 1,
        top: 10,
        right: 10,
        width: 40,
        height: 40,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
})