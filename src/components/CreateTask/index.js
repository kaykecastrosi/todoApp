import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native'
import { Title, Header, Create, Footer, CreateText, Body, Ask, Input, Separe, Options, OptionsInput } from './styles'
import Constants from 'expo-constants'
import { AntDesign, Ionicons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

export default function CreateTask() {
    const navigation = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch()
    const cats = useSelector(state => state.cats)
    function addTodo(text, category, desc) {
        dispatch({ type: "ADD_TODO", text, category, desc })
    }
    const [type = route.params.title, onChangeType] = useState()
    const [value, onChangeText] = useState()
    const [note, onChangeNote] = useState()
    const [color, setColor] = useState()
    useEffect(() => {
        cats.filter(cat => cat.title == type)[0] == undefined ? setColor("#9a9a9a") : setColor(cats.filter(cat => cat.title == type).map(cat => cat.color)[0])
    }, [type])
    return (
        <>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fafafa" translucent={true} />
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior="height" style={{ flex: 1, justifyContent: "center", }}>
                    <Header>
                        <Title>New task</Title>
                        <AntDesign name="close" size={28} color="#454545" style={{ marginRight: 10, marginTop: 5 }} onPress={() => navigation.goBack()} />
                    </Header>
                    <Body>
                        <Ask>What are you planning?</Ask>
                        <Input
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />
                        <Separe />
                        <Options>
                            <Ionicons name="ios-notifications-outline" size={30} color="#9a9a9a" />
                            <OptionsInput placeholder="May 29, 19:00"></OptionsInput>
                        </Options>
                        <Options>
                            <FontAwesome5 name="sticky-note" size={25} color={color} style={{ marginTop: 2, }} />
                            <OptionsInput placeholder="Add Note"
                                onChangeText={text => onChangeNote(text)}
                                value={note}
                            ></OptionsInput>
                        </Options>
                        <Options>
                            <SimpleLineIcons name="tag" size={25} color={color} style={{ marginTop: 2, }} />
                            <OptionsInput placeholder="Category"
                                onChangeText={text => onChangeType(text)}
                                value={type}
                            ></OptionsInput>
                        </Options>
                    </Body>
                    <Footer>
                        <Create style={{
                            backgroundColor: route.params.color
                        }} onPress={() => {
                            addTodo(value, type == "All" ? null : type, note)
                            navigation.goBack()
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
    }
})