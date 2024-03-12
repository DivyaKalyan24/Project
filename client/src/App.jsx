import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Footer from './components/Footer'
import Header from './components/Header'

import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'

import AboutPage from './pages/user/AboutPage'
import ContactPage from './pages/user/ContactPage'
import HomePage from './pages/user/HomePage'
import PredictorPage from './pages/user/PredictorPage'
import ProfilePage from './pages/user/ProfilePage'

import ErrorPage from './pages/error/ErrorPage'

import './styles/app.css'

import './styles/components/dropDown.css'
import './styles/components/footer.css'
import './styles/components/header.css'
import './styles/components/modal.css'

import './styles/pages/auth/loginPage.css'
import './styles/pages/auth/registerPage.css'

import './styles/pages/user/aboutPage.css'
import './styles/pages/user/contactPage.css'
import './styles/pages/user/homePage.css'
import './styles/pages/user/predictorPage.css'
import './styles/pages/user/profilePage.css'

import './styles/pages/error/errorPage.css'
import axios from 'axios'
import { Context } from '.'

const AUTH_URL = 'https://vahann-value-api.vercel.app'

export default function App() {

	const { setIsAuthenticated, setUser } = useContext(Context)

	useEffect(() => {
		axios.post(`${AUTH_URL}/api/v1/get-user`, {}, {
			withCredentials: true
		}).then((res) => {
			setUser(res.data.data)
			setIsAuthenticated(true)
		}
		).catch((err) => {
			setUser({})
			setIsAuthenticated(false)
		}
		)
	}, [setIsAuthenticated, setUser])

	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />

				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/predictor' element={<PredictorPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
			<Footer />
			< Toaster />
		</Router>
	)
}
