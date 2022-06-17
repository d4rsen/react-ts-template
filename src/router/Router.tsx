import React, {FC} from 'react'
import {Route, Routes} from 'react-router-dom'
import {publicRoutes} from './routes'

const Router: FC = () => {
    return (
        <main className="main">
            <Routes>
                {publicRoutes.map(({path, element}) =>
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                )}
            </Routes>
        </main>
    )
}

export default Router
