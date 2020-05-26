import React, { useState } from 'react'
import { Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import ColorPalette from 'react-native-color-palette'
import { Body, Footer, Select, SelectText } from './styles'
import Constants from 'expo-constants'
import { useRoute, useNavigation } from '@react-navigation/native'

export default function ColorPicker() {
    const [colorPicked, setColorPicked] = useState("#C0392B")
    const route = useRoute()
    const navigation = useNavigation()
    return (
        <>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fafafa" translucent={true} />
            <SafeAreaView style={styles.container}>
                <Body>
                    <ColorPalette
                        scaleToWindow={false}
                        onChange={color => setColorPicked(color)}
                        defaultColor={'#C0392B'}
                        colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
                        title={"Select the color:"}
                        icon={
                            <Text>✔</Text>}
                    />
                </Body>
                <Footer>
                    <Select
                        style={{ backgroundColor: colorPicked }}
                        onPress={() => navigation.navigate('CreateCat', { colorPicked: colorPicked, inputValue: route.params.inputValue, icon: route.params.icon })}
                    >
                        <SelectText>Select Color</SelectText>
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