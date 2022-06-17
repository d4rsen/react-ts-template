import {store} from '../redux/store/store'

export interface IAction {
    type: string
    payload?: any
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
