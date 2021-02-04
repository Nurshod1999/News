import React from 'react'
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native'
import Container from '../components/common/Container'
import logo from '../assets/alisherNavoiy.jpg'
import ramka from '../assets/ramka.png'
import { useTabBarHeader } from '../hooks/helpers'

export default function InfoTab() {
    useTabBarHeader({
        headerShown: false,
    })

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Image blurRadius={20} source={logo} style={styles.opacityImage} />

                <View style={styles.logo}>
                    <Image source={logo} style={{
                        width: 200,
                        height: 200,
                        borderRadius: 1000,
                    }} />
                </View>

                <View style={styles.ramka}>
                    <Image source={ramka} style={{ width: 280, height: 280 }} />
                </View>
            </View>

            <Container>
                <Text style={styles.name}>Alisher Navoiy</Text>

                <Text style={styles.biography}>
                    (1441 yil,9–fevral – 1501 yil, 3–yanvar)
                    Alisher Navoiy 1441–yil 9–fevralda Amir Temurning oʻgli Shohruh Mirzo shohligi davrida Hirotda
                    tugʻildi. Zamondoshlari uning haqida koʻpincha «Nizomiddin Mir Alisher» deb yozadilar.
                    'Nizomiddin"–din––diyonat nizomi degani boʻlib, donishmand mansab egalariga beriladigan sifat,
                    «mir» – amir demakdir. Uning otasi Gʻiyosiddin Muhammad (uni Gʻiyosiddin Kichkina ham der
                    edilar) temuriylar saroyining amaldorlaridan, xonadonning ishonchli kishilaridan edi. Onasi
                    amirzoda Shayh Abusaid Changning qizi boʻlgan, ismi maʼlum emas. Alisherning bobosi Temurning
                    oʻgʻli Umarshayx bilan emikdosh (koʻkaldosh) boʻlgan ekan.
                    Buyuk shoir oʻz asarlarida bu qutlugʻ dargohga yaqinligidan iftixor etishini bayon qiladi.
                    Shuningdek, uning tarjimai holiga oid ayrim lavhalar asarlarida uchraydi. Bu tabarruk zot
                    toʻgʻrisidagi baʼzi maʼlumotlarni esa uning zamondoshlari oʻz kitoblarida beradilar.
                    Alisher saroy muhitida yashaganligi uchun alohida tarbiya va nazoratda oʻsdi. Kichiklik
                    chogʻidan sheʼr va musiqaga ishqi tushdi. Olimu fozillar davrasida boʻldi. Uch–toʻrt yoshlarida
                    davrining mashhur shoiri Qosim Anvorning bir sheʼrini yod aytib, mehmonlarni hayratga soldi. Bir
                    yildan soʻng uni maktabga berdilar. U boʻlajak sulton Husayn Bayqaro bilan birga oʻqidi. Uning
                    zehni va iqtidori haqidagi gaplar esa el orasida tarqalib bordi.
                    1447–yilda Shohruh Mirzo vafot etib, temuriy shahzodalar oʻrtasida taxt uchun kurash boshlanadi.
                    Hirot notinch boʻlib qoladi. Alisherlar oilasi Iroqqa yoʻl oladi. Yoʻlda, Taft shahrida Alisher
                    zamonasining mashhur tarixchisi, «Zafarnoma»ning muallifi Sharafiddin Ali Yazdiy bilan
                    uchrashdi.
                    Alisher xonadoni 1541–yilda Hirotga qaytadi. Tarixchi Xondamir bu bilan bogʻliq shunday bir
                    hikoyani keltiradi: Karvon Yazd choʻli bilan Hirotga borarkan, tungi yurishlardan birida ot–ulov
                    ustida hammani uyqu bosadi. Alisher mingan ot, ittifoqo, yoʻldan chiqib, boʻlajak shoir egardan
                    tushib qoladi, uyqu zoʻrlik qilib, uygʻonmaydi. Horigan ot ham egasi yonidan ketmay, toʻxtab
                    qoladi.
                    Alisher tong otib, quyosh qiziganda uygʻonadi. Qarasa, poyonsiz sahro, atrofida hech kim yoʻq.
                    Yolgʻiz otigina yovshan ildizlarini chimtib turibdi. Oʻn yoshli bola oʻzini qoʻlga oladi. Otini
                    minib, zehn bilan yoʻlni topib ilgari yuradi. Kun qizib, chanqoqlik boshlanadi. Shu payt uzoqdan
                    bir narsa qorayib koʻrinadi. U suv toʻla mesh ekan, Ollohga shukuronalar aytib, Alisher yoʻlini
                    davom ettiradi. Uning ota–onasi manzilga yetgach, oʻgʻilllarini yoʻqligini biladilar va
                    mulozimni shoshilinch orqaga qaytaradilar. Mulozim koʻp yurmay, Alisherga duch keladi.
                    Alisherni, goʻyo u qayta tugʻilganday, quvonch bilan kutib oladilar.
                    1452–yilda Abulqosim Bobur Mirzo Xuroson taxtiga oʻtiradi, notinchliklar bosiladi. Gʻiyosiddin
                    Muhammad Sabzavorga hokim qilib tayinlanadi. Alisher esa oʻqishini davom ettiradi. Maktab yosh
                    Alisherni sheʼriyat, adabiyot olamiga olib kirdi. Boʻlajag shoir Saʼdiy Sheroziyning «Guliston».
                    «Boʻston», asarlarini, Farididdin Attorning «Mantiq ut–tayr»(«Qush mantigʻi»)ni soʻngsiz
                    ishtiyoq bilan oʻqidi. Ayniqsa, qushlar tilidan keltirilgan hikoyatlar va ularning chuqur
                    mazmuni Alisherning oʻy–xayolini tamom egallab oldi: Bir kuni qushlar jam boʻlibdi. Har xil:
                    toʻti, qumri, tovus, bulbul va hokazo. Oʻrtaga hudhud (sassiqpopishak) chiqibdi. Boshidagi
                    tojini selkillatib, oʻzini taʼrifu tavsif etibdi. Soʻng u hammani olam podshosi Semrugʻni
                    izlashga undabdi. Qushlar uni surishtira boshlabdilar. «Zotini, sifatini, sifatini ayt, bizga
                    nishon ber!» – deyishibdi ular. Hudhud hikoya boshlabdi: Smurgʻ bir kecha dunyoni aylanib, uchib
                    yurar edi. Nogoh yoʻli Chin shahri ustidan tushdi. Bir silkingan edi, mamlakat nurga gʻaeq
                    boʻldi. Patidan biri tushib qolgan ekan. Ogoh boʻlganlar aqlu shuurini yoʻqotdilar. Chin mulki
                    esa hashamat(ulugʻvorlikka) chulgʻandi. Qushlar zavqu shavq bilan yoʻlga tushadilar. Buroq bu
                    zavq–shavq uzoq davom etmaydi. Qushlar eʼtiroz bildirib, uzr aytib, oʻzlarini chetga ola
                    boshlaydi. Hudhud har biriga javob aytadi. Semrugʻga yetishish baxti oldida bu dunyoning
                    tashvishlari hechligini isbot etuvchi biror hikoya keltiradi. Hudhudning gaplari, hikoyalari
                    qushlarga yangi bir kuch bagʻishlaydi. Ular hudhudni boshliq qilib, yoʻlga tushadilar. Hudhud
                    buy oʻlning ishq yoʻli ekanligi, unga kirgan odam Shayx Sanʼon singari oʻzligidan kechishi
                    lozimligini aytadi. Yana bir–biridan jozibali hikoyalar: Nihoyat, qushlar yeti vodiyni bosib
                    oʻtadilar va oʻzlarining Semurgʻ ekanligini anglab yetadilar.
                    «Mantiq ut–tayr» xayoli Alisherga bir umr hamroh boʻldi. Umrining soʻngida esa «Lison
                    ut–tayr»(«Qush tili») nomi bilan kitob yozdi. Boʻlajag shoir yana Nizomiy Ganjaviy va Xusrav
                    Dehlaviy asarlarini sevib oʻqir edi.
                    1453–yilda Alisherning otasi Gʻiyosiddin Mauhammad vafot etadi. Alisher Abulqosim Bobur
                    hizmatiga kirdi. Avval Sabzavorda, soʻng Mashhadda yashadi. Ikki maktabdosh doʻst – Husayn va
                    Alisher yana birga boʻldilar. Bir munosabat bilan u 50 ming bayt, 100 ming misra sheʼr yod
                    olganini aytdi. Sheʼr shunchaki nutq oʻstirish emas, maʼrifat, taffakur mashqi ham edi. Navoiy
                    15 yoshlarida oʻz sheʼrlari bilan zamonasining mashhur shoirlari diqqatini tordi. Xondamirning
                    yozishicha, sheʼrlari bilan endigina tanilib kela boshlagan Alisher oʻz davrining dongdor shoiri
                    Mavlono Lutfiy xizmatiga boradi. Mavlono undan sheʼr oʻqishni iltimos qiladi. Alisher oʻzining:
                    Orazin yopgʻoch, koʻzimdin sochilur har lahza yosh, Boʻylakim, paydo boʻlur yulduz nihon
                    boʻlgʻoch quyosh. matlaʼi bilan boshlanadigan gʻazalini oʻqiydi. Sheʼrdan hayratga tushgan keksa
                    shoir bunday deydi: «Valloh, agar muyassar boʻlsa edi, oʻzumning forsiy va turkey tillarda
                    aytgan oʻn–oʻn ikki ming baytimni shu gʻazalga almashtirardim va buni oʻzimning katta yutugʻim
                    deb hisoblar edim». Bu turkiy (oʻzbek) sheʼriyatiga juda katta isteʼdod kirib kelayotganidan
                    nishona edi.
                </Text>

                <Text style={styles.biographyTitle}>Alisher Navoiyning yigitlik yillari</Text>

                <Text style={styles.biography}>
                    1457–yilda Abulqosim Bobur vafot etdi. Hokimyat tepasiga Abusaid Mirzo keldi. Husayn Bayqaro
                    taxt uchun kurashga shoʻngʻib ketdi. Navoiy esa Mashhad madrasalarida oʻqishni davom ettirdi.
                    Doʻstlar orttirdi. Keksa shoir Kamol Turbatiyni shu yerda uchratdi. Turbatlik bu shoir Alisher
                    bilan bir bayt muhokamasi ustida tanishib qoldi.Shoir 1464–yilda Hirotga qaytadi. Biroq poytaxda
                    uni noxushliklar kutadi. Abusaid Mirzo u bilan taxt talashayotgan Husayn Bayqaroni yaqin
                    kishilarini taʼqib va tayziq ostiga olgan, jumladan, togʻalari Mirsaid Kobuliy va Muhammad Ali
                    Gʻaribiylarni oldinma–keyin qatl ettirgan edi. Ular isteʼdodli shoirlar edi. Alisherning ota
                    mulki musodara qilingan, hatto yashashab turgani boshpana ham qolmagandi. U shaharda uzoq qola
                    olmadi. Holbuki, yosh shoirning ijodi barq urgan payti edi. Abdurahmon Jomiyadek zamonasining
                    alloma adibi bilan yaqindan tanishib, saboqlar olgani, mehr qozongan edi. Navoiy – «Mahmud
                    Nuran» deb eʼzozlagan bu mashhur shoir va olim oʻzini siyosatdan uzoq tutar, hatto shahar
                    tashqarisidagi Saʼdiddin Koshgʻariy (1456–yilda vafot etgan mashhur shyx, Jomiyning ustozi)
                    mozori yonidan joy qilib, oʻsha yerda yashar edi.
                    Navoiyning Sayyid Hasan Ardasherga yozgan sheʼriy maktubi bor. U «Masnaviy» nomi bilan «Xazoyin
                    ul–maoniy»ning birinchi devoniga kiritilgan. Mutaxasisslar uni Navoiyning Hirotdan Samarqandga
                    joʻnash oldidan yozgan maktubi deb hisoblaydilar. Chamasi, shoir safar oldida Ardasher bilan
                    xayrlashmoqchi boʻlgan, lekin uni topmagan. Soʻng ushbu maktubni yozib qoldirgan. Maktub
                    Alisherning safar oldidagi kechinmalari va oʻz otasidek yaqin koʻrgan Sayyid Hasan Ardasherning
                    sifatlarini taʼrif etish bilan boshlanadi. Vatan va doʻstlarni tashlab ketish ogʻir. Xayrlashmay
                    ketish undan ham ogʻir. U ulugʻ doʻstiga ketishi sabablarini tushuntirmoqchi. Xat shu munosabat
                    bilan yozilgan. Inson soʻz bilan ulugʻdir, «falak jismining joni»–soʻz, ayqisa «nazm» (sheʼr),
                    deydi shoir. Va oʻzida sheʼr yozishga juda katta kuch–qudrat sezayotganini aytadi. Shunday
                    qudratki, agar Firdavsiy oʻz «Shohnoma»sini 30 yilda yozgan boʻlsa, u oʻshanday asarni 30 oyda
                    yoza oladi. Nizomiy Ganjaviyning 30 yil sarflab maydonga keltirgan «Xamsa»si uning oldida 2–3
                    yillik ishdir. Faqat unga imkon kerak. Yurt esa notinch, odamlarda vafo yoʻq. Insoniylik
                    qolmagan zulm avjida. Hatto tasali beruvchi kishi ham yoʻq. Ketaman, desang etagindan tutadigan
                    umr yoʻldoshing, ketsang, ayriliqdan eziladigan doʻsting boʻlmasa.
                    Navoiy 60–yillarning ikkinchi yarmida Samarqandda yashadi. Uning bu shaharga kelishi sababini
                    turlicha talqin qiladilar. Xondamir, oʻqish uchun keldi, deydi. Toʻgʻri u Samarqandda din
                    huquqshunosi va faylasuf Fazulloh Abullays qoʻlida oʻqidi. Zahiriddin Bobur uni Abusaid surgun
                    qildi deydi. Bunda ham asos bor. Abusaidning Alisherga munosabati yomon edi. Shoir Samarqandda
                    dastlab moddiy qiyinchilik ichida yashaydi. Keyinroq unga shahar hokimi Ahmad Hojibek ragʻbat va
                    hoiylik koʻrsatadi. Nihoyat, Samarqand oʻz goʻzalligi bilan ham Navoiyni maftun etadi. Shoi uni
                    «firdavsmonand»(jannatmisol) deb ataydi va unga hech qachon «gardi fano» oʻltirmasligini –
                    zavolikka yuz tutmasligini istaydi. Navoiy shu yillari shoir sifatida juda katta shuhrat topa
                    bordi. 1465–1466–yillarda uning muxlislari sheʼrlarini toʻplab, «devon» tuzadilar. Bu kitob
                    bugun «Ilk devon» nomi bilan mashhurdir. 1468–yil oxrida Eronni eggalash uchun boʻlgan jangda
                    Abusaid halok boʻladi. Husayn Bayqaro 1469–yilning boshida Hiroti qoʻlga oladi va Samarqandga
                    xat yoʻllab, Navoiyni oʻz yoniga chaqiradi. Husayn Bayqaro uni davlat ishlariga jalb etadi.
                    Muhrdor qilib tayinlaydi.
                </Text>

                <Text style={styles.biographyTitle}>Davlat va jamoat arbobi</Text>

                <Text style={styles.biography}>
                    Alisher Navoiy 1469–1472–yillarda muhrdor, 1472–1476–yillarda vazir boʻlib ishlaydi.
                    1487–1488–yillarda Astrobodga hokimlik qildi. Husayn Bayqaro uni oʻziga gʻoyat yaqin tutar, har
                    bir narsada u bilan maslahatlashar va buni nihoyatda qadrlar edi. Toʻgʻri, Bayqaro va Navoiy
                    oʻrtasiga uchinchi kishi aralashgan, sovuqchilik tushgan paytlar ham boʻldi. Lekin oʻz davrining
                    ikki atoqli arbobi hamkorligi juda koʻp sinovlardan muvaffaqiyat bilan oʻtib, avlodlarga oʻrnak
                    boʻldi. Husayn Bayqaro saltanatining daslabki yillarida juda notinch kechdi. Xondamirning
                    yozishicha, u taxtga chiqqan yilning oʻzida Abusaid Mirzoning oʻgʻli Yodgor Muhammad taxt
                    daʼvosi bilan qoʻzgʻaldi. Husayn Bayqaro unga qarshi qoʻshin tortadi va gʻalaba qozonadi.
                    1470–yilning bahorida Yodgor Mirzo Astrobodda yana bosh koʻtaradi. Husayn Bayqaro Navoiyni
                    yoniga olib, qoʻshin bilan yana yoʻlga tushadi. Xuddi shu payt Hirotda qoʻzgʻolon boʻlganligi
                    xabari keladi. Husayn Bayqaro Navoiyni unga katta vakolatlar berib poytaxtga qaytaradi. Navoiy
                    shaharda adolatni tiklab, xalqni tinchlantiradi. Shunday toʻqnashuvlarning birida Yodgor
                    Mirzoning qoʻli baland kelib, poytaxdagi ayrim kishilar unga qoʻshiladilar. Mojarolarni
                    tinchlantirish maqsadida uylangani Abusaidning qizi Robiya Sultonbegim eriga hiyonat qilib, u
                    safariga ketganida poytaxtda inisi Yodgor Mirzo nomiga xutba oʻqitadi. Yurt bir muddat Yodgor
                    Mirzo qoʻliga oʻtadi. Bu hol Husayn Bayqaroga qattiq taʼsir etadi. Tushkunlikka tushadi. Navoiy
                    shunday paytda uning yonida turadi, tassali beradi. Oʻsha 1470–yilning oʻzida payt poylab,
                    Navoiyning maslahati bilan Murgʻob daryosi boʻylaridan juda qisqa muddatda Hirotga yetib keladi
                    va BogʻI Zogʻonda maishatdan charchab uxlab yotgan Yodgor Mirzoni qoʻlga oladi. Shundan
                    keyingina Xurosonda maʼlum muddat tinchlik, osoyishtalik qaror topadi. Alisher ijod kishisi edi.
                    U tabiatan buyuruqvozlikdan va hukmfarmonlikdan yiroq, tafakkur hamda taxayyulga moyil, gʻoyat
                    noziktaʼb bir kishi edi. Mansab–lavozimlar har qancha yuksak boʻlmasin uning uchun zil–zambil
                    yuk boʻlib, Husayn Bayqaroga boʻlgan ixlos va muhabbatigina uni isteʼfo berishdan saqlab turar
                    edi. Shunga qaramasdan, u sadoqat bilan xizmat qildi. `Donishmadnligi, tadbirkorligi bilan
                    koʻplab gʻalayonu qon toʻkishlarni oldini oldi, urushlarni yarashga aylantirdi.
                    Uning bu fazilati, ayniqsa, 1972–1476–yillardagi vazirlik faoliyatida yaqqol namoyon boʻldi.
                    Husayn Bayqaro hokimyat ishlarida Navoiyning aql va sadoqatida tayanib ish koʻrdi. Uni,
                    qarshiligiga qaramasdan, yuqori martabalarga tayinladi, 1472–yilda esa «amir»(vazir)likka
                    qoʻydi. Buyuk shoir «amiri kabir» (ulugʻ amir), «amirul muqarrab» (podshoga eng yaqin amir)
                    unvonlariga musharraf boʻldi. Uning vazirlik yillari Hirotda obodonlik avj olgan, madaniyat
                    gullab, yashnagan davr boʻldi. Ulugʻ amir oʻzi bosh boʻlib, suvsiz yerlarga suv chiqardi, eski
                    ariqlarni tozallatirdi, yangi kanallar qazdirdi. Eski binolarni taʼmir qildirib, yangilarini
                    qurdirdi. Qanchadan–qancha madrasalar, xonahoqlar soldirdi.
                </Text>

                <Text style={styles.biographyTitle}>Ijod ogʻushida.</Text>

                <Text style={styles.biography}>
                    Alisher Navoiy sheʼrni, shoirlikni hamma narsadan baland tutdi. Vazirlik martabasida turib ham
                    sheʼr yozishni toʻxtatmadi. Atrofidagilar uning bu ishiga ragʻbat va hurmat bilan qaradilar.
                    Shoh Husayn Bayqaroning oʻzi unga rahnamolik qildi. Ulugʻ shoirning ilk sheʼriy devonini
                    muxlislari tuzgan boʻlsalar, birinchi devoni – «Badoye ul–bidoya» («Badiiylik ibtidosi»)ni
                    1472–1476 yillarda shohning amri va istagiga koʻra oʻzi kitob qildi. 1485–1486–yillarda ikkinchi
                    devon – «Navodir un–nihoya»(«Nihoyasiz nodirliklar») maydonga keldi. Alisher Navoiy
                    1481–1482–yillarda «Vaqfiya» asarini yozadi. Vaqf deb biror xayrli ishning sarfu xarajatini
                    taʼmin qilmoq uchun ajratilgan yer yoki mulkka aytiladi. Alisher Navoiyning eng katta orzusi
                    doston yozish, birinchi navbatda, XII asrning buyuk shoiri Nizomiy Ganjaviy (1141–1209) dan
                    keyin shoirlik qudtarining mezoniga aylanib qolgan «Xamsa» yaratish edi. Nizomiyning «Panj ganj»
                    nomi bilan tarixga kirgan «Xamsa»si 5 masnaviydan tashkil topgan edi: «Maxzan ul –
                    asror»(«Sirlar xazinas»), «Xusrav va Shirin», «Layli va Majnun», «Hayf paykar»(«Yetti goʻzal»),
                    «Iskandarnoma». Yuz yildan keyin unga Xusrav Dehlaviy (1253–1325) javob qildi. U oʻz
                    dostonlarini «Matla ul–anvor» («Nurlar boshlanishi»), «Shirin va Xusrav», «Majnun va Layli»,
                    «Hasht behisht»(«Sakkiz jannat»), «Oynayi Iskandariy» (Iskandar oyinasi) deb ataladi. Lekin
                    bular hammasi forsiy tilda yozildi. Ulardan forslar, shu tilni bilganlargina bahramand
                    boʻldilar. Oʻz xalqining shunday hazinadan bebahra qolishi Navoiyni qiynadi.
                    Navoiy maslahatga ustozi Abdurahmon Jomiy huzuriga boradi. Jomiy Navoiyni bu ishga tezlikda
                    kirishishga undaydi, uning oʻz kuchi va imkoniyatlariga ishonchini mustahkamlaydi. Navoiy besh
                    dostonni ikki yilda tamomlaydi. 1483–yilda oʻz «Xamsa»sini yoza boshlab, 1485–yilning boshida
                    yugatadi. Shoir ishlagan kunlar hisobga olinsa, 54 ming misralik ulkan obida 6 oyda bitkaziladi.
                    Turkiy tilda birinchi marotaba «Xamsa» yaratiladi. Olimu fuzalo – barcha bu hodisani zoʻr olqish
                    bilan kutib oldilar. Zayniddin Vosifiyning «Badoyeʼ ul–vaqoyeʼ»sidan: "Shoh Navoiyga: «Bir
                    mojaro Siz bilan bizning oramizdan koʻpdan hal boʻlmay keladi, shuni bugun bir yoqlik qilaylik»,
                    deydi. Bu mojaro shundan iborat ediki, Sulton Husayn Alisherning muridi boʻlishini koʻpdan orzu
                    qilar va uni «pirim» deb atar edi.
                    Alisher esa har gal: «Yo Ollo, yo Ollo, bu qanday gap boʻldi! Aslida – biz muridmiz, siz –
                    hammasiga pirsiz», der edi. Endi Sulton Husayn Alisherdan soʻradi: – Pir nima–yu, murid nima?
                    Alisher javob berdi:
                    Pirning tilagi – muridning tilagi boʻlishi kerak.
                    Shunda Sulton Husayn oʻzining oq otini olib kelishni buyuradi. Ot juda asov, chopagʻon edi.
                    Sulton Husayn aytdi:
                    Siz pir, men murid boʻladigan boʻlsam, Siz shu otga minasiz, men uni yetaklayman.
                    Alisher noiloj otga minishga majbur boʻladi. Ot gʻoyat asov boʻlib, shohdan boshqani oʻziga
                    yaqinlashtirmas edi. Alisher oyogʻini uzangiga qoʻyishi bilan ot tipirchilay boshladi, Sulton
                    Husayn otiga oʻshqirdi, ot itoat qilib, Alisherning minishini kutdi. Alisher egariga oʻtirishi
                    bilan Sulton Husayn otining jilovidan ushlab yetaklay boshladi. Alisher hushidan ketdi. Uni
                    egardan koʻtarib oldilar. Tarihda bunday hol koʻrilmagan edi. Hech bir zamonda shoh shoirga
                    jilovdorlik qilmas edi. 1480–1490–yillar Navoiy uchun badiiy ijodda samarali davr boʻldi. Shoir
                    «Xamsa» dan keyin koʻp oʻtmay, ketma–ket nasriy kitoblar yaratdi. U 1488–yilda yozgan «Tarixi
                    mulki ajam» («Ajam shohlar tarixi») shularning biri edi. Bu asar «Muhokamat ul–lugʻatayn»da
                    «Zubdat ut–tavoxir»(«Tarixlar qaymogʻi») deb ham ataladi. 1480–yillarning oxiri, 1490–yillarning
                    boshida Navoiyning yaqin doʻstlari, ustozlaridan Sayyid Hasan Ardasher (1489), Abdurahmon Jomiy
                    (1492), Pahlavon Muhammad (1493) ketma–ket vafot etdilar. Navoiy ularga bagʻishlab «Holoti
                    Sayyid Hasan Ardasher», «Xamsat ul–mutahayyirin», «Holoti Pahlavon Muhammad» asarlarini yozadi.
                    Bu asarlar nasriy boʻlib, shoirning bu ulugʻ zamondoshlari haqidagi memuar xotiralaridan tashkil
                    topgan edi. 1491–yilda muammo janriga bagʻishlangan «Risolayi muammo» (ikkinchi nomi «Mufradot»)
                    risolasini yozi. Navoiy zamonasida muammo janri keng tarqalgan boʻlsa – da, asosan, fors tilida
                    yozilar edi. Navoiy oʻzbek tilida muammo yozgan ilk oʻzbek shoirlaridan boʻldi. «Xazoyin
                    ul–maoniy»ga uning 52 muamosi kiritilgan. Shoirning fors tilidagi muammolarini esa 500
                    chamalaydilar. Navoiyning 1490–yillardagi eng katta xizmatlaridan biri «Xazoin ul maoniy»
                    («Maʼnolar xazinasi»)ni tuzish boʻldi. 1492–1498–yillarda tartib qilingan 4 qism devondan iborat
                    bu ulkan sheʼriy kulliyot shoirning turkiy tilda yozilgan deyarli barcha lirik sheʼrlarini
                    qamrab olgan edi. Shoir 7–8 yoshidan 20 yoshigacha boʻlgan davrni umrining navbahori hisobladi
                    va shu davr devonini «Gʻaroyib us–sigʻar»(«Yoshlik gʻaroyibotlari») deb atadi.
                </Text>

                <Text style={styles.biographyTitle}>Hayotining soʻnggi yillari.</Text>

                <Text style={styles.biography}>
                    1490–yillarning boshidagi ogʻir yoʻqotishlar, ayniqsa, 40 yillik qadrdoni Pahlavon Muhammad
                    bilan ustozi Jomiydan judo boʻlish Navoiyga qattiq taʼsir etdi. Buning ustiga saroyda
                    Xadichbegim Nizomulmulk bilan mulk va mansab ishtiyoqida yangi–yangi fitnalar toʻqiydi. Shu
                    fitnalar natijalaridan biri pok qalbli barcha kishilarni larzaga solib, mamlakatni halokat
                    yoqasiga keltirib qoʻyadi. Bu–Moʻmin Mirzoning oʻz bobosi farmoni bilan qatl qilinishi edi.
                    1489–yilda Navoiy Hirotga qaytgach oʻrniga Astrobod hokimi qilib Badiuzzamon tayinlagan edi. Bu
                    orada Balxda Darveshali qoʻzgʻoloni boshlanadi. Husayn Bayqaro Navoiyni olib, Balxga joʻnaydi.
                    Darveshali bilan sulh tuziladi, lekin Hisorda Abusaidning oʻgʻli Sulton Mahmud Husayn Bayqaroga
                    qarshi kurash boshlaydi. Shoh Navoiyni Balxda qoldirib, oʻgʻli Badiuzzamonni olib Hirotga
                    otlanadi. U bilan ham murosaga kelishib, orqaga qaytadi va Balxni Badiuzzamon tasaruffiga
                    beradi. Badiuzzamon oʻgʻli – 13 yoshli Moʻmin Mirzoni Astrobodda qoldirib Balxga keladi.
                    Xadichbegim Nizomulkmulk bilan birgalikda Astrobodga Muzaffar Mirzoni hokim qilib tayinlashga
                    erishadilar. Husayn Bayqaro va Badiuzzamon oʻrtasidagi munosabat yomonlashadi. Badiuzzamon
                    Moʻmin Mirzoga Muzaffar Mirzoni shaharga kiritmaslikka buyuruq beradi. Shoh tezda Navoiyni
                    Balxga yuboradi. Navoiy ota va oʻgʻil orasiga tushib, ularni yarashtiradi. Biroq huddi shu
                    paytda Husayn Bayqaroning Badiuzzamonni qoʻlga tushirish va qamoqqa olish haqidagi Balxga,
                    shahar qutloviga yoʻllagan yashirin farmoni maʼlum boʻlib qoladi. Yarash yana urushga aylanadi.
                    Navoiy voqeani bunday izga kirib ketganidan qattiq iztirob chekadi va umidsiz orqaga qaytadi.
                    Ota–oʻgʻil urushida Badiuzzamon yengiladi. Moʻmin Mirzoni Muzaffar Mirzo asir oladi. 1499–yilda
                    Marvda Husayn Bayqaroning yana bir oʻgʻli Abulmuhsin otasiga qarshi bosh koʻtaradi. Shoh oʻz
                    qoʻshini bilan Marvga otlanadi. Bu paytlarda Navoiy hajga boorish orzusida edi. Mirxondning
                    xabar berishicha, Abulmuhsin otasi bilan sulh tuzish uchun Alisherning podshoh nomidan vakil
                    boʻlib kelishini shart qilib qoʻyadi. Navoiyga tez chopar yuboriladi. Chopar shoirga yetib,
                    shohning maktubini topshiradi. Unda shoirning hajni keyinga qoldirib, texda Marvga yetib kelishi
                    iltimos qilingan edi. Alisher Mashhad ulugʻlari va hamrohlari bilan maslahatlashadi. Ular
                    mamlakatning tinchiligi uchun Alisherning hajga borishidan kechishini soʻraydilar. Alisher
                    belgilangan joyga yetib boradi, ota–oʻgʻillarni yarashtirib, Hirotga qaytadi.
                    1498–yilda Alisher Navoiy «Majolis un–nafois»ni qayta koʻzdan kechirib, toʻldirdi. Shoirlar
                    adadni 459 taga yetkazdi. Shu yili yoshligidan qalbida muhirlanib kelgan «Mantiq ut–tayr» ga
                    javob yozadi. «Lison ut–tayr» Navoiy ijodini yakunlovchi asarlardan biridir. Buyuk shoir
                    1498–1499 yillarda xatlarini toʻplab, «Munshaot» tuzdi. Unda 88 ta xat jamlangan boʻlib,
                    ularning aksariyati shoirning shoh va shahzodalarga yoʻllangan. Shoirning 1500–yilning
                    oxirlarida yozib tugatgan «Mahbub ul–qulub» asari uning eng soʻnggi asari boʻlib qoldi. Navoiy
                    1501–yilning 3–yanvarida vafot etadi. Butun halq – shohda gadogacha, olimdan choʻpongacha,
                    shoirdan dehqongacha ulugʻ farzandining oʻlimiga qaygʻu va iztirob bilan motam tutadi.
                </Text>

                <Text style={styles.biographyTitle}>Yana Navoiy haqida</Text>

                <Text style={styles.biography}>
                    Ulugʻ oʻzbek shoiri, mutafakkiri va davlat arbobi Nizomiddin Mir Alisher Navoiy temuriylar
                    saltanatiga tegishli Xuroson mulkining markazi – Hirotda tugʻilib, shu yerda umrining asosiy
                    qismini oʻtkazgan. Navoiyning otasi Gʻiyosiddin Bahodir temuriylar xonadoniga yaqin boʻlgan.
                    Sheʼr zavqi va isteʼdodi erta uygʻongan Alisher etti yoshidayoq Farididdin Attorning
                    'Mantiqut–tayrʼ asarini yod olgan, Sharafiddin Ali Yazdiy nazariga tushgan. Mavlono Lutfiy yosh
                    shoir isteʼdodiga yuqori baho bergan, Kamol Turbatiy eʼtirofini qozongan.
                    Sayyid Hasan Ardasher, Pahlavon Muhammad kabi ustozlardan taʼlim olgan, Abdurahmon Jomiy bilan
                    ijodiy hamkorlikda boʻlgan. Navoiy 1469 yilgacha temuriylar orasidagi ichki nizolar sababli
                    Hirotdan chiqib ketishga majbur boʻlgan.
                    Husayn Boyqaro Xuroson taxtiga oʻtirgach (1469), Navoiy hayoti va ijodida yangi bosqich
                    boshlanadi. Husayn Boyqaro Alisher Navoiyga 'muqarrabi hazrati sultoniyʼ ('sulton hazratlarining
                    eng yaqin kishisiʼ) degan unvonni beradi. Unga koʻra Navoiy davlatning barcha ishlariga aralasha
                    olardi.
                    Navoiy ijodi ixlosmandlari uning sheʼrlarini yigʻib, 'Ilk devonʼ (1464–65) tuzgan edilar,
                    soʻngra 'Badoyiul–bidoyaʼ ('Goʻzallikning boshlanishiʼ), 'Navodirun–nihoyaʼ ('Nodirliklar
                    nihoyasiʼ) nomli devonlar (1470–yillar) tartib berilgan. Lirik merosi umumiy hajmi 50000
                    misradan ortiq 'Xazoyinul–maoniyʼ nomli toʻrt devon (1491–1498)ga jamlangan. Alisher Navoiy
                    ijodining yuksak choʻqqisi 'Xamsaʼ asari (1483–85)dir, shoir birinchilardan boʻlib, turkiy tilda
                    toʻliq 'Xamsaʼ yaratdi va turkiy tilda shunday koʻlamdor asar yozish mumkinligini isbotlab
                    berdi. 'Xamsaʼ tarkibiga 'Hayrat ul–Abrorʼ, 'Farhod va Shirinʼ, 'Layli va Majnunʼ, 'Sabʼai
                    sayyorʼ, 'Saddi Iskandariyʼ kabi dostonlar kiradi. Navoiyning tasavvufiy qarashlari deyarli
                    barcha asarlarining ruhiga singgan boʻlsa–da, maxsus 'Lisonut–tayrʼ dostoni(1499)da,
                    'Nasoyimul–muhabbatʼ manqabasiʼ(1495–96)da, 'Tarixi anbiyo va hukamoʻ(1485–8), 'Arbainʼ,
                    'Munojotʼ singari asarlarida aks etgan. Oʻzbekiston mustaqillikka erishganidan soʻng Navoiy
                    asarlarini diniy va soʻfiylik jihatidan oʻrganish kengaydi, ular obʼektiv va ilmiy bahosini
                    olmoqda. 'Arbainʼ, 'Munojotʼ kabi asarlari chop etildi.
                    Navoiy merosining salmoqli qismi nasriy asarlardan iborat. Ular ijtimoiy–siyosiy,
                    axloqiy–taʼlimiy va ilmiy–falsafiy yoʻnalishdadir. 'Mahbubul–qulubʼ(1500–01) Navoiyning soʻnggi
                    yirik asari boʻlib, unda ulugʻ mutafakkir adibning hayoti davomidagi kuzatishlari, toʻplagan boy
                    tajribasi oʻz yuqori darajasida aksini topgan. Uch qismdan iborat bu asarda 'Soriun–nosning
                    afʼol va ahvolining kayfiyatiʼ (1), axloqiy muammolar (2), 'mutafarriqa favoyid va amsol suratiʼ
                    (3) masalalari ifodalangan.
                    'Xamsatul–mutahayyirinʼ('Besh hayratʼ,1494) asarida ustozi va doʻsti Abdurahmon Jomiy, uning
                    hayoti lavhalari, tariqati, yozishmalari, asarlari haqida hayratomuz hikoyalar keltiriladi.
                    'Holoti Sayyid Hasan Ardasherʼ (1488–89), 'Holoti Rahlavon Muhammadʼ (1493) asarlari
                    manoqib–holot yoʻnalishida boʻlib, ularda shoirga ustozlik qilgan buyuk shaxslar hayoti,
                    faoliyati yoritilgan. 'Munshaotʼ (1498–99) Navoiyning maktublari toʻplami (jami 88 ta xat)
                    boʻlib, ular sogʻinchlik xatlari, navroʻz tabriklari, taʼziyanomalar, siyosiy oʻgitlar,
                    sulhnomalar va boshqa yoʻnalishlardadir. Ular Husayn Boyqaro, Badiuzzamon va boshqa tarixiy
                    shaxslarga bitilgan. 'Majolisun–nafoisʼ (1490–91; 1497–98) tazkirasi turk tilidagi yozilgan
                    dastlabki tazkira boʻlib, unda shoir sakkiz majlis doirasida 459 shoir va adib haqida maʼlumot
                    bergan. Birinchi va ikkinchi majlisda tazkira tartib berilganda hayot boʻlmagan shoirlar,
                    uchinchi majlisda shoirning zamondoshlari, toʻrtinchi majlisda beshinchi majlisda Xuroson,
                    oltinchisida Movaraunnahr, Kichik Osiyo va Eron, yettinchi va tiliga tarjima qilingan.
                    Navoiy 'Muhokamatul–lugʻataynʼ asarini oʻz zamonidagi turkiy lahjalar, ziyolilar nutqi, badiiy
                    va ilmiy asarlarning leksik–grammatik xususiyatlarini forsiy til xususitlari bilan qiyoslashga
                    bagʻishladi. Jonli xalq tilida qoʻllanilgan koʻplab soʻzlarni asarga kiritib, adabiy tilda
                    qoʻllanilishiga sababchi boʻldi. Oʻzigacha ishlatilgan soʻzlarni yangi maʼno qatlamlarini ochdi.
                    Oʻzbek tili grammatikasini Mahmud Koshgʻariydan soʻng ilmiy asosga soldi. Oʻzbek tilining badiiy
                    va estetik imkoniyatlari kengayishiga sababchi boʻldi. Fors va turk tillarida yaratilgan eng
                    yirik va eʼtiborli asarlarga murojaat qildi, shoir va olimlarni til istiqloli uchun kurashga
                    chorladi. Aruz nazariyasiga bagʻishlangan 'Mezonul–avzonʼ(1492) asarida arab va fors aruzi
                    qoidalarini turkiy tilda aniq va ravon tushuntirdi. Turk yozma va ogʻzaki sheʼriyati
                    namunalarining vazn xususiyatlarini oʻrgandi. Turkiy aruz tabiatini yoritish bilan birga turk
                    sheʼriyati murakkab aruz tizimini boyitganini anglatdi.
                    'Tarixi muluki Ajamʼ ('Ajam shohlari tarixiʼ,1488) qisqa tarix boʻlib, Eron shohlari xronikasi
                    bayon qilingan 'Tarixi Tabariyʼ, 'Shohnomaʼ asarlarini mantiqan toʻldiradi, ulardagi faktlarni
                    izchil ilmiy tizimga soladi. Afsonaviy shoh Kayumarsdan sosoniylarning soʻnggi vakili Yazdi
                    Shahriyorgacha boʻl–gan shohlar tarixini, mifologik talqinini beradi. 'Tarixi anbiyo va hukamoʻ
                    ('Paygʻambarlar va hakimlar tarixiʼ, 1485–1498) asarining birinchi boʻlimida
                    'Qissasul–anbiyoʻlar anʼanalarini davom ettirib, Odam alayhis–salomdan Nuh, Iso, Muso, Yaʼqub,
                    Sulaymon, Yusuf, Dovud kabi paygʻambarlar tarixiga oid qissalar keltiradi. Navoiy Luqmoni
                    hakimga ham anbiyolar qatoridan joy beradi. Asarning 'Hukamo zikridaʼ deb nomlangan ikkinchi
                    boʻlimida insoniyat tarixida chuqur iz qoldirgan donishmand hakimlar Fishogʻurs, Jomosp, Buqrot,
                    Suqrot, Aflotun, Arastu, Bolinos, Jolinus, Batlimus, Buzurgmehr haqida ibratli hikoyalar
                    keltiradi, ularning donishmandligi, ilmiy kashfiyotlari siri qisqa satrlarda talqin qilinadi.
                    'Vaqfiyaʼ (1481) asarida vaqf yerlari, mulklari, ularning miqdori, ulardan foydalanish, vaqf
                    mulki va mablagʻi evaziga quriladigan bino va inshootlar, bu yoʻnalishda madrasa va xonaqohlarda
                    oʻrnatilgan tartiblar haqida fikr yuritdi. Navoiy oʻz ixtiyoridagi mablagʻlar hisobiga qurilgan
                    xayriya muassasalari, ilmiy–madaniy binolar va bogʻlarni sanab oʻtdi. Asar Navoiy va Husayn
                    Boyqaro munosabatlarini oʻrganish uchun ham muhim hujjatli manbadir.
                    Navoiy dahosi tufayli insoniyat tarixida dunyoning turli joylarida yashayotgan turkiy xalqlar
                    yakqalam qilindi, millat maʼnaviy merosi umumjahon xazinasidan mustahkam oʻrin oldi. Mustaqil
                    Oʻzbekistonda Navoiyni anglash davlat siyosati darajasiga koʻtarildi. Respublikadagi eng yirik
                    viloyatlardan biri va uning markazi, Oʻzbekiston Davlat mukofoti, Oʻzbekiston Respublikasi
                    Fanlar Akademiyasi Til va adabiyot instituti, opera va balet akademik teatri, Oʻzbekiston Davlat
                    kutubxonasi, Samarqand Davlat universiteti va boshqa yuzlab madaniy–maʼrifiy muassasalar, jamoa
                    xoʻjaliklari ulugʻ shoir nomi bilan ataladi. 2016-yili Alisher Navoiy nomidagi o'zbek tili va
                    adabiyoti universiteti ochilgan
                </Text>
            </Container>

            <View style={{ marginBottom: 10 }} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    opacityImage: {
        width: '100%',
        height: 400,
        // opacity: 0.37,
    },
    logo: {
        width: '100%',
        height: 400,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ramka: {
        width: '100%',
        height: 400,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 35,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 5,
    },
    biography: {
        fontSize: 15,
        lineHeight: 23,
    },
    biographyTitle: {
        fontWeight: '700',
        fontSize: 25,
        marginVertical: 10,
    },
})
