import {combineReducers} from 'redux'
import { actoresReducer } from './actoresReducer'
import { peliculasReducer } from './peliculasReducer'

export const rootReducer=combineReducers({
    peliculas:peliculasReducer,
    actores:actoresReducer
})