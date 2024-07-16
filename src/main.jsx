import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import IndukProps from './pages/Induk-Props.jsx'
import LandingPages from './pages/LandingPages.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App /> */}
    {/*<Home />*/}
    {/* <IndukProps/> */}
    {/*<LandingPages/>*/}

    <BrowserRouter>
      <App/>
    </BrowserRouter>

  </React.StrictMode>,
)