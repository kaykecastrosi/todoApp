import React, { useEffect, useState, useRef } from 'react'
import { ScrollView, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { Note, Title, Box, Btn, AddBox, TodoBox, Desc, CheckBox, Options, Details, DetailsBall, DetailsTitle, TasksAmount, DeleteButton } from './styles'
import { Ionicons, Entypo, MaterialCommunityIcons, FontAwesome5, AntDesign } from '@expo/vector-icons'
import Constants from 'expo-constants'
import 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { useDispatch } from 'react-redux'

export default function NoteScreen() {

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const todos = useSelector(state => state.todos)
  const route = useRoute()
  const color = route.params.color
  function DeleteTodo(id) {
    dispatch({ type: "DELETE_TODO", id })
  }
  function rightButton() {
    return (
      <DeleteButton >
        <AntDesign name="close" size={28} color="#f00" />
      </DeleteButton>
    )
  }
  function deleteCat(title) {
    dispatch({ type: "DELETE_CAT", title })
    navigation.goBack()
  }
  return (
    <>
      <SafeAreaView style={{ backgroundColor: color, flex: 1, marginTop: Constants.statusBarHeight }}>
        <StatusBar barStyle="light-content" backgroundColor={color} hidden={false} translucent={true} />
        <Options>
          <Ionicons name="ios-arrow-back" size={30} color="#fff" style={{ marginLeft: 20, marginTop: 15 }} onPress={() => navigation.navigate("Home")} />
          <Entypo name="dots-three-vertical" size={25} color="#fff" style={{ marginRight: 20, marginTop: 20 }} onPress={() => route.params.title == "All" ? null : deleteCat(route.params.title)} />
        </Options>
        <Details>
          <DetailsBall>
            <MaterialCommunityIcons name={route.params.icontype} size={35} color={color} />
          </DetailsBall>
          <DetailsTitle>{route.params.title}</DetailsTitle>
          <TasksAmount>{route.params.title === "All" ? todos.length : todos.filter((todo) => todo.type === route.params.title).length} tasks</TasksAmount>
        </Details>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Box>{route.params.title === "All" ? todos.map(todo => {
            return (
              <Swipeable key={todo.id} renderRightActions={rightButton}
                onSwipeableRightOpen={() => {
                  DeleteTodo(todo.id)
                }}
              >
                <TodoBox>
                  <Title>{todo.text}</Title>
                  <Note>
                    <FontAwesome5 name="sticky-note" size={25} color={`${color}70`} style={{ marginTop: 2, marginTop: 5, }} />
                    <Desc> : {todo.desc}</Desc>
                  </Note>
                  <CheckBox>
                    <MaterialCommunityIcons name="checkbox-blank-outline" size={40} color="#DDD" style={{ marginBottom: 610, marginRight: 5 }} />
                  </CheckBox>
                </TodoBox>
              </Swipeable>
            )
          }) : todos.filter((todo) => todo.type === route.params.title).map(todo => {
            return (
              <Swipeable key={todo.id} renderRightActions={rightButton}
                onSwipeableRightOpen={() => {
                  DeleteTodo(todo.id)
                }}
              >
                <TodoBox>
                  <Title>{todo.text}</Title>
                  <Note>
                    <FontAwesome5 name="sticky-note" size={25} color={`${color}70`} style={{ marginTop: 2, marginTop: 5, }} />
                    <Desc> : {todo.desc}</Desc>
                  </Note>
                  <CheckBox>
                    <MaterialCommunityIcons name="checkbox-blank-outline" size={40} color="#DDD" style={{ marginBottom: 610, marginRight: 5 }} />
                  </CheckBox>
                </TodoBox>
              </Swipeable>
            )
          })
          }</Box>
        </ScrollView>
        <AddBox>
          <Btn style={{ backgroundColor: color }} onPress={() => navigation.navigate("CreateTask", { color: color, title: route.params.title })}>
            <Ionicons name="md-add" size={30} color="#fff" />
          </Btn>
        </AddBox>
      </SafeAreaView>
    </>
  )
}