import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Header from './components/Header'

import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'

import HomePage from './pages/user/HomePage'

import ErrorPage from './pages/error/ErrorPage'

import './styles/app.css'

import './styles/components/header.css'
import './styles/components/dropDown.css'

import './styles/pages/auth/loginPage.css'
import './styles/pages/auth/registerPage.css'

import './styles/pages/user/homePage.css'
import './styles/pages/user/aboutPage.css'

import './styles/pages/error/errorPage.css'
import axios from 'axios'
import { Context } from '.'
import AboutPage from './pages/user/AboutPage'

const AUTH_URL = 'http://127.0.0.1:5500'

export default function App() {

  const {setIsAuthenticated} = useContext(Context)

  useEffect(() => {
    axios.post(`${AUTH_URL}/api/v1/get-user`, {}, {
      withCredentials: true
    }).then( 
      setIsAuthenticated(true)
    ).catch((err) =>
      setIsAuthenticated(false)
      )
  }, [setIsAuthenticated])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<HomePage />} />
        <Route path='/contact' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      < Toaster />
    </Router>
  )
}
