import {combineReducers} from 'redux'
import form from './form'

export default function createReducer() {
    return combineReducers({
        form
    })
}
