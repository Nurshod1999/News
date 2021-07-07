import React, { useContext, useState } from 'react'
import { View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Icon from 'react-native-feather'
import Container from '../components/common/Container'
import Search from '../components/common/Search'
import { useTabBarHeader } from '../hooks/helpers'
import { colors } from '../utils/colors'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import { n } from '../utils/normalize'
import { Icon1, Icon2, Icon3, Icon4 } from '../components/Svgs'
import useTrans from '../hooks/trans'
import { maxLength } from '../utils/maxLength'
import { GlobalContext } from '../contexts/GlobalContext'

export default function MainTab() {
    const navigation = useNavigation()
    const [search, setSearch] = useState('')
    const t = useTrans()
    const [modal, setModal] = useState(false)
    const { setLang, lang } = useContext(GlobalContext)

    useTabBarHeader({
        title: 'Новости дня',
        headerTitleAlign: 'center',
        headerLeft: () => (
            <TouchableOpacity onPress={() => setModal(true)} style={{ marginLeft: 30 }}>
                <Icon.Settings color="black" />
            </TouchableOpacity>
        ),
    })

    const categories = [
        { id: 1, name: t('lit'), icon: <Icon1 width={30} /> },
        { id: 2, name: t('lingu'), icon: <Icon2 width={30} /> },
        { id: 3, name: t('history'), icon: <Icon3 width={30} /> },
        { id: 4, name: t('rel'), icon: <Icon4 width={30} /> },
    ]

    const books = [
        {
            name: 'Мировые новости',
            image: image1,
            pdf: 'https://lenta.ru/news/2021/07/05/kidnappind/',
            description: 'Инцидент произошел в Национальном центре туберкулеза и лепры в городе Зария. По информации полиции.',
            id: 1,
            category: 1,
        },
        {
            name: 'Новости BBC',
            image: image2,
            description: 'По словам местных жителей, атака на полицейских была отвлекающим маневром.',
            pdf: 'https://www.bbc.com/news',
            id: 2,
            category: 1,
        },
        {
            name: 'Kun.uz новости',
            image: image3,
            id: 3,
            pdf: 'https://kun.uz/',
            description: 'Отмечается, что боевики атаковали общежития работников медицинского центра. Один из сотрудников больницы рассказал.',
            category: 2,
        },
        {
            name: 'Daryo.uz новости',
            image: require('../assets/images/image3.jpg'),
            description: 'Злоумышленники скрылись с ними в ближайшем лесу. На данный момент местные службы безопасности ищут заложников.',
            pdf: 'https://daryo.uz/',
            id: 4,
            category: 3,
        },
        {
            name: 'Dunyonews.uz новости',
            pdf: 'http://dunyo.news/',
            description: 'Случаи похищения людей происходят в Нигерии регулярно. Так, 21 июня стало известно, что в поселке Бирнин-Яур террористы напали на школу и похитили по меньшей мере 80 детей и нескольких взрослых.',
            id: 5,
            category: 4,
            image: require('../assets/images/image4.jpg'),
        },
        {
            name: 'Новости Москвы',
            description: 'До этого о похожем инциденте сообщалось 31 мая. Тогда группа вооруженных людей напала на школу-интернат в городе Тегина на западе Нигерии. Они похитили 200 учеников.',
            pdf: '\'https://lenta.ru/news',
            id: 6,
            category: 2,
            image: require('../assets/images/image5.jpg'),
        },

    ]

    const searchResults = books.filter((item) => item.name.includes(search))

    const languages = [
        { name: 'Русский', value: 'ru' },
        { name: 'O\'zbek', value: 'uz' },
        { name: 'English', value: 'en' },
    ]

    return (
        <ScrollView style={{ flex: 1 }}>
            <Container>
                {search === '' ? (
                    <View>
                        <View style={styles.search}>
                            <Search onSubmit={setSearch} placeholderTextColor="grey" />
                        </View>

                        <View style={{ marginTop: 20, marginBottom: 0 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    ...styles.categoryTitle,
                                    width: '80%',
                                    marginBottom: 15,
                                }}>{t('works')}
                                </Text>

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

                        <View style={{ marginBottom: 10 }}>
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
                    </View>
                ) : (
                    <View>
                        <View style={styles.search}>
                            <Search onSubmit={setSearch} placeholderTextColor="grey" />
                        </View>

                        {searchResults.map((item) => (
                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                style={{ paddingTop: 20 }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => navigation.navigate('WorkDetail', { book: item })}
                                    style={styles.cardSearch}>
                                    <View
                                        style={styles.imageContainer}>
                                        <Image source={item.image} style={styles.image} />
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
                                        <Text style={{ color: '#717171' }}>{maxLength(item.description, 150)}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ marginBottom: 10 }} />
                            </ScrollView>
                        ))}
                    </View>
                )}

                <Modal animationType="slide" transparent visible={modal}>
                    <TouchableWithoutFeedback onPress={() => setModal(false)}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.modalContent}>
                                    <Text style={styles.itemName}>
                                        {t('changeLanguage')}
                                    </Text>

                                    <View style={styles.feedBack}>
                                        {languages.map((item) => (
                                            <TouchableOpacity key={item.value} onPress={() => setLang(item.value)}>
                                                <View
                                                    style={item.value !== lang ? (
                                                        { ...styles.more, marginLeft: 0 }
                                                    ) : ({
                                                        ...styles.more,
                                                        backgroundColor: '#191723',
                                                        marginLeft: 0,
                                                    })}>
                                                    <Text
                                                        style={item.value === lang ? (
                                                            { color: 'white' }
                                                        ) : ({ color: 'black' })}>
                                                        {item.name}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
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
        width: 150,
        height: 115,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cards: {
        flexDirection: 'row',
    },
    card: {
        width: n(130),
        alignItems: 'center',
        marginRight: 12,
    },
    authorImage: {
        width: '100%',
        height: 160,
        borderRadius: 10,
    },
    authorName: {
        color: 'black',
        paddingVertical: 10,
        textAlign: 'center',
    },
    cardSearch: {
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
    image: {
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        width: 90,
        height: 135,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 50,
    },
    modalView: {
        width: '95%',
        padding: 10,
        marginBottom: 80,
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageFormat: {
        width: 95,
        height: 90,
        borderRadius: 15,
    },
    openButton: {
        width: 130,
        height: 43,
        justifyContent: 'center',
        marginLeft: 20,
        backgroundColor: 'orange',
        borderRadius: 50,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalContent: {
        flexDirection: 'column',
    },
    feedBack: {
        flexDirection: 'row',
    },
    more: {
        width: 100,
        height: 25,
        marginTop: 10,
        marginLeft: 5,
        backgroundColor: colors.WHITER,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemName: {
        fontSize: 18,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    itemRating: {
        width: 15,
        height: 15,
    },
    noImage: {
        width: 0,
        height: 0,
    },
    defaultImgContainer: {
        width: 90,
        height: 90,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.WHITER,
    },
    defImg: {
        width: 40,
        height: 40,
    },
})
