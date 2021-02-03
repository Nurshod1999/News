import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Container from '../components/common/Container'
import Search from '../components/common/Search'
import { useTabBarHeader } from '../hooks/helpers'

export default function MainTab() {
    useTabBarHeader({
        title: 'Asosiy',
        headerTitleAlign: 'center',
    })

    return (
        <View>
            <Container>
                <View style={styles.search}>
                    <Search onSubmit={() => console.log('123123')} placeholderTextColor="grey" />
                </View>

                <View style={styles.search}>
                    <Text style={styles.categoryTitle}>Kategoriyalar</Text>
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
    },
})
