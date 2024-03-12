import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Context } from '../..'

const LoginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { isAuthenticated, setIsAuthenticated } = useContext(Context)

	useEffect(() => {
		document.title = 'Login | Vahann Value.'
	}, [])

	const AUTH_URL = 'https://vahann-value-api.vercel.app'

	const onSubmit = async (e) => {
		e.preventDefault()

		try {
			const { data } = await axios.post(`${AUTH_URL}/api/v1/login`, {
				email,
				password
			},
				{
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true
				}
			)

			if (data.status === 'Success') {
				toast.success(data.message)
				setIsAuthenticated(true)
			}
		}

		catch (err) {
			if (err.response.data.status === 'Error') {
				toast.error(err.response.data.error)
				setIsAuthenticated(false)
			}
			else {
				toast.error(err.message)
				setIsAuthenticated(false)
			}
		}

	}

	if (isAuthenticated) return <Navigate to={'/'} />

	return (
		<div className='container userSelectNone'>
			<h1 className='title'>Vahann Value.</h1>

			<div className='loginContainer'>
				<form className='loginForm' onSubmit={onSubmit}>
					<h2>Login</h2>
					<input type="email" onInput={(e) => { setEmail(e.target.value) }} name="emailId" id="emailIdInput" placeholder='Enter your Email ID' required />
					<input type="password" onInput={(e) => { setPassword(e.target.value) }} name="password" id="passwordInput" placeholder='Password' required />

					<input type="submit" value="Login" />

					<Link to={'/register'}>Don't have an Account?</Link>
				</form>
			</div>
		</div>
	)
}

export default LoginPage