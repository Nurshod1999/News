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
import { n } from '../utils/normalize'
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from '../components/Svgs'
import useTrans from '../hooks/trans'

export default function MainTab() {
    const navigation = useNavigation()
    const t = useTrans()

    useTabBarHeader({
        title: 'Asosiy',
        headerTitleAlign: 'center',
    })

    const categories = [
        { id: 1, name: t('lit'), icon: <Icon1 width={30} /> },
        { id: 2, name: t('lingu'), icon: <Icon2 width={30} /> },
        { id: 3, name: t('history'), icon: <Icon3 width={30} /> },
        { id: 4, name: t('rel'), icon: <Icon4 width={30} /> },
        { id: 5, name: t('ethic'), icon: <Icon5 width={30} /> },
        { id: 6, name: t('disct'), icon: <Icon6 width={30} /> },
    ]

    const books = [
        { name: 'Sabbai Sayyor', image: image1, category: 1, id: 1 },
        { name: 'Sabbai Sayyor', image: image2, category: 1, id: 2 },
        { name: 'Sabbai Sayyor', image: image3, category: 2, id: 3 },
        { name: 'Sabbai Sayyor', image: image4, category: 3, id: 4 },
    ]

    return (
        <ScrollView style={{ flex: 1 }}>
            <Container>
                <View style={styles.search}>
                    <Search onSubmit={() => console.log('123123')} placeholderTextColor="grey" />
                </View>

                <View style={{ marginTop: 20, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...styles.categoryTitle, width: '80%' }}>{t('works')}</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('WorksList', { category: 'all' })}>
                            <Text style={{
                                ...styles.categoryTitle,
                                fontWeight: 'normal',
                                fontSize: 14,
                            }}>
                                {t('all')}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cards}>
                        {books.map((item) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('WorkDetail', { book: item })}
                                key={item.name}
                                activeOpacity={0.7}
                                style={styles.card}>
                                <Image style={styles.authorImage} source={item.image} />
                                <View style={styles.shadow} />
                                <Text style={styles.authorName}>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                <View style={{ marginTop: 20, marginBottom: 10 }}>
                    <Text style={styles.categoryTitle}>{t('category')}</Text>
                </View>

                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                    {categories.map((item) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('WorksList', { category: item.id })}
                            key={item.name}
                            activeOpacity={0.7}
                            style={styles.categoryContainer}>
                            <View>
                                {item.icon}
                            </View>

                            <Text style={{ marginTop: 30 }}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
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
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 10,
        width: 100,
        height: 100,
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
