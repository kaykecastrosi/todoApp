import React from 'react'
import { View, Text, AsyncStorage } from 'react-native'

export default function Options() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text onPress={async () => await AsyncStorage.clear()}>
                Clear Cache
            </Text>
        </View>
    )
}