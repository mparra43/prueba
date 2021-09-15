import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import {categoriesReducer} from "./categoriesReducer";



export const rootReducer = combineReducers({
    categories:categoriesReducer,
    ui: uiReducer,
    auth: authReducer
})

