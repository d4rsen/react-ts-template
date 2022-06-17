import { combineReducers } from 'redux'
import { templateReducer } from './templateReducer'

export const rootReducer = combineReducers({
    template: templateReducer
})
