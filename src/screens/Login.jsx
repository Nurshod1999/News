import React, { useState, Fragment, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import Input from '../components/common/Input'
import Container from '../components/common/Container'
import { usePostRequest } from '../hooks/request'
import { LOGIN } from '../urls'
import { required } from '../utils/validators'
import { GlobalContext } from '../contexts/GlobalContext'
import ServerError from '../components/common/ServerError'

export default function Login() {
    const login = usePostRequest({ url: LOGIN })
    const navigation = useNavigation()
    const { auth } = useContext(GlobalContext)

    const [showSignButton, setShowSignButton] = useState(true)

    const [showError, setshowError] = useState(false)

    function onChangeText(name, value) {
        if (value.length > 4 && name === 'password') setShowSignButton(false)
        else setShowSignButton(false)
    }

    async function onSubmit(data) {
        const { success, response } = await login.request({ data })
        if (success) {
            setshowError(true)
        }
        if (success) {
            await auth(response?.token, response?.user)
            navigation.reset({ index: 0, routes: [{ name: 'TabScreen' }] })
        }
    }

    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <Fragment>
                <Container>
                    {showError ? (
                        <View style={styles.error}>
                            <Text style={{ color: '#F40D0D' }}>Неправильный телефон или пароль</Text>
                        </View>
                    ) : null}
                    <ServerError
                        error="svfsdvsd"

                    />
                    <Formik onSubmit={onSubmit} initialValues={{ phone: '', password: '' }}>
                        {({ handleSubmit }) => (
                            <View style={{ marginVertical: '16%', flex: 2 }}>

                                <View style={styles.phone}>
                                    <Input
                                        validate={required()}
                                        label="Телефон"
                                        name="phone"
                                        style={styles.input}
                                        onChangeText={onChangeText}
                                    />
                                </View>

                                <View style={styles.phone}>

                                    <Input
                                        type="password"
                                        label="Пароль"
                                        name="password"
                                        style={styles.input}
                                        onChangeText={onChangeText}
                                        secureTextEntry

                                    />
                                </View>

                                {showSignButton ? (
                                    <View>
                                        <TouchableOpacity style={styles.buttonFirst}>
                                            <Text style={styles.getInTitleFirst}>Войти</Text>
                                        </TouchableOpacity>
                                        <Text
                                            onPress={() => {
                                                navigation.navigate('Forget')
                                            }}
                                            style={styles.bottomTextFirst}>Я не помню Эл. адрес
                                        </Text>
                                    </View>
                                )
                                    : (
                                        <View>
                                            <TouchableOpacity onPress={handleSubmit} style={styles.buttonSecond}>
                                                <Text style={styles.getInTitleSecond}>Войти</Text>
                                            </TouchableOpacity>
                                            <Text
                                                onPress={() => {
                                                    navigation.navigate('Forget')
                                                }}
                                                style={styles.bottomTextSecond}>Я не помню Эл. адрес
                                            </Text>
                                        </View>
                                    )}
                            </View>
                        )}
                    </Formik>
                </Container>
                <View style={{ marginTop: '32%' }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '5%',
                    }}>
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#AAAAAA', marginRight: 5 }}>У вас нет
                            учетной записи?
                        </Text>
                        <Text onPress={() => {
                            navigation.navigate('register')
                        }} style={{ color: '#0D40F4', fontSize: 14 }}>Регистрация
                        </Text>
                    </TouchableOpacity>
                </View>
            </Fragment>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 56,
        backgroundColor: '#F8F8F8',
        borderRadius: 2,
    },

    buttonFirst: {
        width: '100%',
        height: 49,
        backgroundColor: '#EEEEEE',
        borderRadius: 2,
    },
    buttonSecond: {
        width: '100%',
        height: 49,
        backgroundColor: '#0D40F4',
        borderRadius: 2,

    },
    getInTitleFirst: {
        color: '#AAAAAA',
        fontSize: 18,
        textAlign: 'center',
        top: 14,
    },
    getInTitleSecond: {
        color: '#F8F8F8',
        fontSize: 18,
        textAlign: 'center',
        top: 14,
    },
    bottomTextFirst: {
        textAlign: 'center',
        fontSize: 14,
        color: '#AAAAAA',
        marginVertical: '5%',
        fontWeight: '400',
    },
    bottomTextSecond: {
        textAlign: 'center',
        fontSize: 14,
        color: '#0D40F4',
        marginVertical: '5%',
        fontWeight: '400',
    },
    leftArrow: {
        marginTop: '4%',
    },
    phone: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 56,
        marginBottom: '8%',
        backgroundColor: '#F8F8F8',
    },
    error: {
        width: '100%',
        height: 40,
        backgroundColor: 'rgba(244, 13, 13, 0.05)',
        marginTop: '5%',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#F40D0D',
        paddingTop: 7,
        marginBottom: 10,
    },
})
