import React, { useState } from 'react'
import { Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import ColorPalette from 'react-native-color-palette'
import { Body, Footer, Select, SelectText } from './styles'
import Constants from 'expo-constants'
import { useRoute, useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function IconPick() {
    const route = useRoute()
    const navigation = useNavigation()
    const [color = route.params.color, setColor] = useState()
    const [icon = "view-grid-plus", setIcon] = useState()
    const [icons, setIcons] = useState([
        "clipboard-text-outline",
        "briefcase-outline",
        "headphones",
        "airplane",
    ])
    return (
        <>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fafafa" translucent={true} />
            <SafeAreaView style={styles.container}>
                <Body>
                    <FlatList
                        data={icons}
                        extraData={icons}
                        keyExtractor={index => index}
                        numColumns={10}
                        renderItem={({ item }) => <MaterialCommunityIcons name={item} size={30} color={color} onPress={() => setIcon(item)} />} />
                </Body>
                <Footer>
                    <Select
                        style={{ backgroundColor: color }}
                        onPress={() => navigation.navigate('CreateCat', { colorPicked: color, inputValue: route.params.inputValue, icon: icon })}
                    >
                        <SelectText>Select Icon</SelectText>
                    </Select>
                </Footer>
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