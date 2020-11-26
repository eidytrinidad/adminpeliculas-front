import {combineReducers} from 'redux'
import { actoresReducer } from './actoresReducer'
import { peliculasReducer } from './peliculasReducer'
import { uiReducer } from './uiReducer'

export const rootReducer=combineReducers({
    peliculas:peliculasReducer,
    actores:actoresReducer,
    ui:uiReducer
})