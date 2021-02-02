import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../utils/colors'
import { n } from '../../utils/normalize'

export default function TabBarIcon({ focused, icon: Icon }) {
    return (
        <View style={focused ? styles.active : styles.inactive}>
            <Icon color={focused ? colors.yellow : 'white'} style={styles.block} />
        </View>
    )
}

const styles = StyleSheet.create({
    active: {
        backgroundColor: 'white',
        borderRadius: n(100),
    },
    inactive: {
        borderRadius: n(100),
    },
    block: {
        margin: n(15),
    },
})
