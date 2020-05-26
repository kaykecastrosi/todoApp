import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import Constants from 'expo-constants'
import { Title, Header, Item, List, ItemTitle, ItemTitleBox, ItemDesc, AddBox, Btn, DeleteButton } from './styles'
import { Entypo, MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons'
import 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { useDispatch } from 'react-redux'

export default function Home() {
    const navigation = useNavigation()
    const cats = useSelector(state => state.cats)
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    function deleteCat(title) {
        dispatch({ type: "DELETE_CAT", title })
    }
    function rightButton() {
        return (
            <DeleteButton >
                <AntDesign name="close" size={28} color="#f00" />
            </DeleteButton>
        )
    }
    return (
        <>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#eff1f3" translucent={true} />
            <SafeAreaView style={styles.container}>
                <Header>
                    <Entypo name="menu" size={40} color="#858585" onPress={() => navigation.openDrawer()} />
                    <Title>Lists</Title>
                </Header>
                <List
                    data={cats}
                    keyExtractor={cat => cat.id}
                    numColumns={2}
                    extraData={cats}
                    renderItem={({ item, index }) => {
                        console.log(item)
                        console.log(item.color)
                        return (
                            <Swipeable
                                renderRightActions={rightButton}
                                onSwipeableRightOpen={() => {
                                    item.title == "All" ? null : deleteCat(item.title)
                                }}
                            >
                                <Item onPress={() => navigation.navigate("NoteScreen", {
                                    title: item.title,
                                    icontype: item.icontype,
                                    color: item.color,
                                })}>
                                    <MaterialCommunityIcons name={item.icontype} size={50} color={item.color} style={{ marginLeft: 18, marginTop: 15 }} />
                                    <ItemTitleBox>
                                        <ItemTitle style={{ fontSize: item.title.length < 9 ? 30 : 250 / item.title.length }}>{item.title}</ItemTitle>
                                    </ItemTitleBox>
                                    <ItemDesc>{item.title === "All" ? todos.length : todos.filter(todo => todo.type === item.title).length} tasks</ItemDesc>
                                </Item>
                            </Swipeable>
                        )
                    }}
                />
                <AddBox>
                    <Btn onPress={() => navigation.navigate('CreateCat')}>
                        <Ionicons name="md-add" size={30} color="#fff" />
                    </Btn>
                </AddBox>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#eff1f3",
    }
})