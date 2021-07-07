import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import { maxLength } from '../utils/maxLength'

export default function WorksList({ route }) {
    const { category } = route.params
    const navigation = useNavigation()

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
            image: require('../assets/images/image4.jpg'),
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
        {
            name: 'Uznews.uz новости',
            description: 'Отмечается, что большинство похищенных — девочки. При проникновении в школу боевики убили полицейского.',
            image: require('../assets/images/image6.jpg'),
            id: 7,
            category: 3,
            pdf: '\'https://lenta.ru/news',
        },
    ]

    const categoryBooks = category !== 'all' ? books.filter((item) => item.category === category) : books

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{ backgroundColor: '#eeeeee', paddingTop: 10 }}>
            {categoryBooks.map((item) => (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('WorkDetail', { book: item })}
                    style={styles.card}>
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
    image: {
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        width: 90,
        height: 135,
    },
})
