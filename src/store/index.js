import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import { AsyncStorage } from 'react-native'

const persistCongif = {
    transforms: [immutableTransform()],
    key: 'root',
    storage: AsyncStorage,
}

const TODOS_STATE = {
    todos: [{
        id: 1,
        text: "Música",
        type: "Music",
        desc: "Notes"
    },
    {
        id: 2,
        text: "Viajar",
        type: "Travel",
        desc: "Notes"
    },
    {
        id: 3,
        text: "Trabalhar",
        type: "Work",
        desc: "Notes"
    },
    ],
    cats: [{
        id: 1,
        title: "All",
        icontype: "clipboard-text-outline",
        color: "#5983f8"
    },
    {
        id: 2,
        title: "Work",
        icontype: "briefcase-outline",
        color: "#F4BE82"
    },
    {
        id: 3,
        title: "Music",
        icontype: "headphones",
        color: "#F19585"
    },
    {
        id: 4,
        title: "Travel",
        icontype: "airplane",
        color: "#5FCA81"
    },],
}

function todosApp(state = TODOS_STATE, action) {
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, todos: [...state.todos, { text: action.text, id: state.todos.length + 1, type: action.category, desc: action.desc }] }
        case "DELETE_TODO":
            return { ...state, todos: state.todos.filter(item => item.id !== action.id) }
        case "ADD_CAT":
            return {
                ...state, cats: [...state.cats, {
                    title: action.title,
                    id: state.cats.length + 1,
                    icontype: action.icontype,
                    color: action.color
                }]
            }
        case "DELETE_CAT":
            return { ...state, todos: state.todos.filter(todo => todo.type !== action.title), cats: state.cats.filter(cat => cat.title !== action.title) }
        default:
            return state
    }
}

const persistedReducer = persistReducer(persistCongif, todosApp)

const store = createStore(persistedReducer)

const persistor = persistStore(store)


export { store, persistor }

