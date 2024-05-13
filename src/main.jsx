import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderUpper from './component/Header/HeaderUpper'
import './index.css'
import HeaderLower from './component/Header/HeaderLower'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
