import React from 'react'
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Icon from 'react-native-feather'
import Container from '../components/common/Container'
import Search from '../components/common/Search'
import { useTabBarHeader } from '../hooks/helpers'
import { colors } from '../utils/colors'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import { n } from '../utils/normalize'
import { Icon1, Icon2, Icon3, Icon4 } from '../components/Svgs'
import useTrans from '../hooks/trans'

export default function MainTab() {
    const navigation = useNavigation()
    const t = useTrans()

    useTabBarHeader({
        title: 'Asosiy',
        headerTitleAlign: 'center',
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ marginLeft: 30 }}>
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
            name: 'TARIXI MULUKI AJAM',
            image: image1,
            pdf: 'https://www.researchgate.net/publication/325878997_ALISHER_NAVOIYNING_TARIXI_MULUKI_AJAM_ASARIDA_ZOLIM_SHOHLAR_TASVIRI/fulltext/5b537640aca27217ffaf244f/ALISHER-NAVOIYNING-TARIXI-MULUKI-AJAM-ASARIDA-ZOLIM-SHOHLAR-TASVIRI.pdf?origin=publication_detail',
            description: '„Tarixi muluki Ajam“ — Alisher Navoiyning Eron shohlari xronikasi bayon qilingan qisqa jildli kitobi.',
            id: 1,
            category: 1,
        },
        {
            name: 'Muhokamatul Lugʻatayn',
            image: image2,
            description: '"MUHOKAMAT UL-LUGʻATAYN" ("Ikki til muhokamasi", 1499) — Alisher Navoiynint tilshunoslikka oid asarlaridan biri. Navoiy "M.ul-l."da oʻzbek tilining boyligini, qudratini, oʻsha zamonning adabiy tillari qatoridan oʻrin olishga qodir va haqli ekanligini ilmiy tomondan isbotladi. Asarda oʻzbek (turkiy) va fors tillari unli tovushlar, leksika va morfologiya doirasida oʻzaro qiyoslanadi. Dastlab har ikki tildagi unlilar qiyoslanganda, shoir fors tilida unlilar soni cheklanganligi, oʻzbek tilida esa unlilar bir qancha maʼno farq,lovchi variantlarga ega ekanligi va ular uzaro uzunqisqaligi bilan ajralib turishini dalillar orqali koʻrsatib bergan.',
            pdf: 'https://gunturkbetikevi.files.wordpress.com/2010/12/muhokamatul-lugatayn.pdf',
            id: 2,
            category: 1,
        },
        {
            name: 'Majolis un-Nafois',
            image: image3,
            id: 3,
            pdf: 'http://www.wayu.uz/uploads/1/gIL-7KoJwmwkfYx2R-oI0Vz6ju-BZajG.pdf',
            description: 'Alisher Navoiy tazkirasi (1490—91; 1497—98 yilda qayta ishlangan). Turkiy tazkirachilikning ilk namunasi. Asarda 15-asrda Xuroson va qoʻshni mamlakatlarda yashagan shoir, yozuvchi va olimlar (jami 459 kishi) ijodiga oid qisqa maʼlumotlar berilgan. Maʼlumotlar yillar, geografik oʻrinlar hamda sulolaviy tartiblarga tayanib joylashtirilgan. 8 kiyem — "majlis"dan iborat. 1—2majlislarda muallifning salaflari — tazkira yozilayotgan vaqtda hayot boʻlmagan shoirlar, 3majlisda oʻziga zamondosh shoirlar haqida maʼlumotlar keltirilgan. 5—6 majlislarda Xuroson, Samarqand, Xorazm, Qarshi, Badaxshon, Qazvin, Sova, Kirmon, Sheroz va boshqa joylardan chiqqan kalam axdlari haqida; 7majlisda esa temuriylarga mansub shoirlar haqida fikr yuritilgan. 8 majlis Sulton Husayn Boyqaroga bagʻishlangan. Tazkirada shoirlarning bilim darajasi, axloqi, dunyoqarashi, mehnatga munosabati kabi xususiyatlari alohida koʻrsatilgan. Har bir shoirga berilgan tasnif uning ijodidan namuna keltirish bilan asoslangan.',
            category: 2,
        },
        {
            name: 'LISON UT-TAYR(Nasriy bayon)',
            image: require('../assets/images/lisonUtTayr.jpg'),
            description: 'Alisher Navoiyning dostoni, oʻzbek mumtoz adabiyoti va oʻzbek adabiy tilining muhim yodgorliklaridan. 1498—99 yilda fors shoiri Farididdin Attornnt "Mantiq ut-tayr" asari taʼsirida yozilgan. Asar syujeti va bosh gʻoya xususida Attorga izdoshlik qilgan. "L.ut-t." falsafiy doston boʻlib, shoir unda majoziy obrazlar, qahramonlarning sarguzashtlari orqali tasavvufiy gʻoyalarini ifodalagan. Navoiy asarda Xudo tashqarida emas, sening oʻzingda, degan fikrni olga suradi. Shu yoʻsinda insonni ulugʻlaydi, uning kamolotga erishish yoʻlini yuksak sheʼriy mahorat bilan bayon etadi.',
            pdf: 'https://xdp.uz/uploads/documentation/5.pdf',
            id: 4,
            category: 3,
        },
        {
            name: 'HAYRAT UL-ABROR',
            pdf: 'http://library.ziyonet.uz/uploads/books/29429/54647f356fa14.pdf',
            description: ' Alisher Navoiy qalamiga mansub "Xamsa"ning birinchi dostoni (1483) boʻlib, pand-nasihat ruhidagi taʼlimiy-axloqiy, falsafiy doston. 3,988 baytdan iborat boʻlib, 64 bob, 29 maqolatdan tashkil topgan. Aruzning sareʼ bahrida yozilgan. Asar anʼanaviy muqaddima — hamd va naʼt bilan boshlanadi. Navoiyning dunyo haqidagi qarashlari mana shu muqaddimada oʻz aksini topgan. Uningcha, dunyoning boshi ham, oxiri ham, yaratuvchi ham, kuzatuvchi ham Allohdir: Avval oʻzung, mobayn oʻzung, Barchaga xoliq, boriga ayn oʻzung.',
            id: 5,
            category: 4,
            image: require('../assets/images/hayrat.jpg'),
        },
        {
            name: 'Farhod Va Shirin',
            description: 'Farhod va Shirin — turkiy xalqlar adabiyotlarida anʼanaviy mazmunga ega boʻlgan va bir necha ijodkorlar tomonidan qalamga olingan ishqiy qissa va dostonlardan birining nomi.',
            pdf: 'http://www.wayu.uz/uploads/1/Q-P5Z3jVp1RjnKfKxLaSChq1eRjDUex8.pdf',
            id: 6,
            category: 2,
            image: require('../assets/images/farhod.jpg'),
        },
        {
            name: 'LAYLI VA MAJNUN',
            description: 'Layli va Majnun (arab. مجنون و ليلى (Majnun va Laylo)) arab romantik dostonidir. Voqeiy boʻlmish bu hikoyada Qays ibn al-Mulavvo ismli arab yigitining Layli ismli qiz bilan ishqiy munosabatlari yoritiladi. Oʻgʻlining bu qizga uylanishiga qarshi chiqqan otasining tazyiqlari va ayriliq tufayli Qays aqldan ozib, devona boʻladi ("majnun" va "jinni" soʻzlarining oʻzagi bir).',
            image: require('../assets/images/layli.jpg'),
            id: 7,
            category: 3,
            pdf: 'https://kitobsevar.uz/kxpv/xrpt_6328dy4f3sbji4kcgsiiramdtg0uhy2cpsatg410k2iuuux2c6au7mzouya3l263j6lrzbpa41u.pdf',
        },
    ]

    return (
        <ScrollView style={{ flex: 1 }}>
            <Container>
                <View style={styles.search}>
                    <Search onSubmit={() => console.log('123123')} placeholderTextColor="grey" />
                </View>

                <View style={{ marginTop: 20, marginBottom: 0 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...styles.categoryTitle, width: '80%', marginBottom: 15 }}>{t('works')}</Text>

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
})
