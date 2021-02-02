import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as Icon from 'react-native-feather'
import TabBarIcon from './components/common/TabBarIcon'
import InfoTab from './screens/InfoTab'
import FavouritesTab from './screens/FavouritesTab'
import MainTab from './screens/MainTab'

import { n } from './utils/normalize'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer theme={{ colors: { background: 'white' } }}>
            <Stack.Navigator initialRouteName="TabScreen" screenOptions={{ headerStyle: styles.stackHeader }}>
                <Stack.Screen name="TabScreen" component={TabScreen} options={{
                    cardStyle: styles.card,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function TabScreen() {
    return (
        <Tab.Navigator tabBarOptions={{ style: styles.tabHeader, showLabel: false, keyboardHidesTabBar: true }}>
            <Tab.Screen name="MainTab" component={MainTab} options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={Icon.Home} />,
            }} />
            <Tab.Screen name="Favourites" component={FavouritesTab} options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={Icon.Bookmark} />,
            }} />
            <Tab.Screen name="Info" component={InfoTab} options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={Icon.AlertCircle} />,
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabHeader: {
        backgroundColor: '#F2CB5B',
        width: '100%',
        height: '12%',
        paddingHorizontal: n(35),
        borderTopLeftRadius: n(30),
        borderTopRightRadius: n(30),
        borderBottomRightRadius: n(30),
        borderBottomLeftRadius: n(30),
        borderTopWidth: 0,
        marginBottom: 5,
    },
    stackHeader: {
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
    },
    card: {
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: '#fff',
    },
})
