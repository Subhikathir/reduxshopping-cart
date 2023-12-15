import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../container/Home'
import {Route,Routes} from 'react-router-dom'
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}
