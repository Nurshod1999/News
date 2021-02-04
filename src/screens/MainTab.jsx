import React from 'react'
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import Container from '../components/common/Container'
import Search from '../components/common/Search'
import { useTabBarHeader } from '../hooks/helpers'
import { colors } from '../utils/colors'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'
import image7 from '../assets/images/image7.png'
import { n } from '../utils/normalize'

export default function MainTab() {
    const navigation = useNavigation()

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
        { name: 'Sabbai Sayyor', image: image1 },
        { name: 'Sabbai Sayyor', image: image2 },
        { name: 'Sabbai Sayyor', image: image3 },
        { name: 'Sabbai Sayyor', image: image4 },
        { name: 'Sabbai Sayyor', image: image5 },
        { name: 'Sabbai Sayyor', image: image6 },
        { name: 'Sabbai Sayyor', image: image7 },
    ]

    return (
        <ScrollView style={{ flex: 1 }}>
            <Container>
                <View style={styles.search}>
                    <Search onSubmit={() => console.log('123123')} placeholderTextColor="grey" />
                </View>

                <View style={{ marginTop: 20, marginBottom: 10 }}>
                    <Text style={styles.categoryTitle}>Kategoriyalar</Text>
                </View>

                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                    {categories.map((item) => (
                        <View key={item.name} style={styles.categoryContainer}>
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
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...styles.categoryTitle, width: '80%' }}>Asarlar</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('WorksList')}>
                            <Text style={{
                                ...styles.categoryTitle,
                                fontWeight: 'normal',
                                fontSize: 14,
                            }}>
                                Hammasi
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cards}>
                        {books.map((item) => (
                            <View key={item.name} style={styles.card}>
                                <Image style={styles.authorImage} source={item.image} />
                                <View style={styles.shadow} />
                                <Text style={styles.authorName}>{item.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </Container>
        </ScrollView>
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
        width: n(130),
        height: n(200),
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 12,
    },
    authorImage: {
        width: '100%',
        height: '80%',
        borderRadius: 10,
    },
    authorName: {
        color: 'black',
        paddingVertical: 10,
    },
})
