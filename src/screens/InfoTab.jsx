import React from 'react'
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native'
import Container from '../components/common/Container'
import logo from '../assets/images/author.jpg'
import { useTabBarHeader } from '../hooks/helpers'
import useTrans from '../hooks/trans'

export default function InfoTab() {
    useTabBarHeader({
        headerShown: false,
    })
    const t = useTrans()

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Image blurRadius={20} source={logo} style={styles.opacityImage} />
                <View style={styles.logo}>
                    <Image source={logo} style={{
                        width: 300,
                        height: 300,
                        borderRadius: 1000,
                    }} />
                </View>

            </View>

            <Container>
                <Text style={styles.name}>{t('title1')}</Text>

                <Text style={styles.biographyTitle}>{t('title2')}</Text>

                <Text style={styles.biography}>
                    {t('info1')}
                    {/* {t('info2')} */}
                </Text>
                <Text style={styles.biographyTitle}>{t('title3')}</Text>
                <Text style={styles.biography}>
                    {t('info3')}
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
