import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import NoteScreen from './components/NotesScreen/'
import Home from './components/Home/'
import Options from './components/Options'
import CreateCat from './components/CreateCat'
import CreateTask from './components/CreateTask'
import ColorPicker from './components/CreateCat/components/Color'
import IconPick from './components/CreateCat/components/Icon'
const Drawer = createDrawerNavigator()
function Draw() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Options" component={Options} />
        </Drawer.Navigator>
    )
}

const Stack = createStackNavigator()
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Draw">
                <Stack.Screen name="Draw" component={Draw} />
                <Stack.Screen name="NoteScreen" component={NoteScreen} />
                <Stack.Screen name="CreateCat" component={CreateCat} initialParams={{ colorPicked: "#9a9a9a", inputValue: "", icon: "view-grid-plus" }} />
                <Stack.Screen name="CreateTask" component={CreateTask} />
                <Stack.Screen name="ColorPicker" component={ColorPicker} />
                <Stack.Screen name="IconPick" component={IconPick} initialParams={{ colorPicked: "#9a9a9a", inputValue: "", icon: "view-grid-plus" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
