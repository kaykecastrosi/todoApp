import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, KeyboardAvoidingView, Modal } from 'react-native'
import { Title, Header, Create, ModalView, Footer, CreateText, Body, Ask, Input, Separe, Options, OptionsTitle } from './styles'
import Constants from 'expo-constants'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

export default function CreateCat() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const route = useRoute()
    function addCat(title, icontype, color) {
        dispatch({ type: "ADD_CAT", title, icontype, color })
    }

    const [icon = route.params.icon, setIcon] = useState()
    const [color = route.params.colorPicked, setColor] = useState()
    const [inputValue = route.params.inputValue, onChangeText] = useState()

    return (
        <>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fafafa" translucent={true} />
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center", }}>
                    <Header>
                        <Title>New category</Title>
                        <AntDesign name="close" size={28} color="#454545" style={{ marginRight: 10, marginTop: 5 }} onPress={() => navigation.goBack()} />
                    </Header>
                    <Body>
                        <Ask>Category name:</Ask>
                        <Input
                            onChangeText={text => onChangeText(text)}
                            value={inputValue}
                        />
                        <Separe />
                        <Options style={{ marginLeft: 3, }} onPress={() => navigation.navigate('ColorPicker', { inputValue, icon })}>
                            <Ionicons name="ios-color-palette" size={30} color={color} />
                            <OptionsTitle>{color === "#9a9a9a" ? "Color" : color}</OptionsTitle>
                        </Options>
                        <Options onPress={() => navigation.navigate("IconPick", { inputValue, icon, color })}>
                            <MaterialCommunityIcons name={icon} size={30} color={color} />
                            <OptionsTitle>Icon</OptionsTitle>
                        </Options>
                    </Body>
                    <Footer>
                        <Create style={{ backgroundColor: color }} onPress={() => {
                            addCat(inputValue, icon, color)
                            navigation.navigate("Home")
                        }}>
                            <CreateText>Create</CreateText>
                        </Create>
                    </Footer>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#fafafa",
    },
})