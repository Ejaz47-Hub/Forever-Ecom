import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider, { ShopContext } from './Context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ShopContextProvider>
     <App/>
    </ShopContextProvider>
    </BrowserRouter>,
)
