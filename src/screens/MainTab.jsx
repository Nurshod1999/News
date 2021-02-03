import React from 'react'
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native'
import * as Icon from 'react-native-feather'
import Container from '../components/common/Container'
import Search from '../components/common/Search'
import { useTabBarHeader } from '../hooks/helpers'
import { colors } from '../utils/colors'
import sabbai from '../assets/images/sabbaiSayyor.png'

export default function MainTab() {
    useTabBarHeader({
        title: 'Asosiy',
        headerTitleAlign: 'center',
    })

    const categories = [
        { name: 'Drama', icon: <Icon.PenTool color="black" width={18} /> },
        { name: 'Tragediya', icon: <Icon.PenTool color="black" width={18} /> },
        { name: 'Komediya', icon: <Icon.PenTool color="black" width={18} /> },
        { name: 'Lirika', icon: <Icon.PenTool color="black" width={18} /> },
        { name: 'Klassika', icon: <Icon.PenTool color="black" width={18} /> },
        { name: 'G`azal', icon: <Icon.PenTool color="black" width={18} /> },
    ]
    const books = [
        { name: 'Sabbai Sayyor', image: sabbai },
        { name: 'Sabbai Sayyor', image: sabbai },
        { name: 'Sabbai Sayyor', image: sabbai },
        { name: 'Sabbai Sayyor', image: sabbai },
        { name: 'Sabbai Sayyor', image: sabbai },
        { name: 'Sabbai Sayyor', image: sabbai },
        { name: 'Sabbai Sayyor', image: sabbai },
    ]

    return (
        <View style={{ flex: 1 }}>
            <Container>
                <View style={styles.search}>
                    <Search onSubmit={() => console.log('123123')} placeholderTextColor="grey" />
                </View>

                <View style={{ marginTop: 20, marginBottom: 10 }}>
                    <Text style={styles.categoryTitle}>Kategoriyalar</Text>
                </View>

                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                    {categories.map((item) => (
                        <View style={styles.categoryContainer}>
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 50,
                                    height: '100%',
                                    marginRight: 5,
                                    width: 25,
                                    alignItems: 'center',
                                }}>
                                {item.icon}
                            </View>

                            <Text>{item.name}</Text>
                        </View>
                    ))}
                </View>

                <View style={{ marginTop: 20, marginBottom: 10 }}>
                    <Text style={styles.categoryTitle}>Asarlar</Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cards}>
                        {books.map((item) => (
                            <View style={styles.card}>
                                <Image style={styles.authorImage} source={item.image} />
                                <View style={styles.shadow} />
                                <Text style={styles.authorName}>{item.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </Container>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        marginTop: 20,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    categoryContainer: {
        backgroundColor: colors.WHITER,
        padding: 8,
        flexDirection: 'row',
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    cards: {
        flexDirection: 'row',
    },
    card: {
        width: 130,
        height: 180,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 12,
        backgroundColor: 'black',
    },
    authorImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    authorName: {
        color: '#fff',
        paddingVertical: 10,
    },
})
