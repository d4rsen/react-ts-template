import {configureStore, PreloadedState} from '@reduxjs/toolkit'
import {rootReducer} from '../reducers/rootReducer'
import {RootState} from '../../models/redux';

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
})

export const initStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}
