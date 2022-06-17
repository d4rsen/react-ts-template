import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from '../App/App'
import { store } from '../redux/store/store'

it('renders without crashing', () => {
    const root = createRoot(document.createElement('div'))

    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    )
})
