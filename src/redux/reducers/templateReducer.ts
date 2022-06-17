import {initialState} from '../init/initial.state'
import {AnyAction} from 'redux'

export const templateReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {

        default:
            return state
    }
}
