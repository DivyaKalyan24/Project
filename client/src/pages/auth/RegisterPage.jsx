import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, Navigate } from 'react-router-dom'
import { Context } from '../..'

const RegisterPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const {isAuthenticated} = useContext(Context)


  useEffect(() => {
    document.title = 'Register | Car Price Predictor.'
  }, [])


  const AUTH_URL = 'http://127.0.0.1:5500'

  const onSubmit = async (e) => {
    e.preventDefault()

    if (password === confirmPassword && password.length > 7) {
      try {
        const { data } = await axios.post(`${AUTH_URL}/api/v1/register`, {
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

        console.log(data)

        if (data.status === 'Success') {
          toast.success(data.message)
          
          return <Navigate to={'/login'} />
        }
      }

      catch (err) {
        console.log(err)
        if (err.response.data.status === 'Error') {
          toast.error(err.response.data.error)
        }
        else {
          toast.error(err.message)
        }
      }
    }

    else {
      toast.error('Enter valid Email/Password')
    }
  }

  if(isAuthenticated) return <Navigate to={'/'}/>

  return (
    <div className='container userSelectNone'>
      <h1 className='title'>Car Price Predictor.</h1>

      <div className='registerContainer'>
        <form onSubmit={onSubmit} className='registerForm'>
          <h2>Register</h2>
          <input type="email" onInput={(e) => { setEmail(e.target.value) }} name="emailId" id="emailIdInput" placeholder='Enter your Email ID' required />
          <input type="password" onInput={(e) => { setPassword(e.target.value) }} name="password" id="passwordInput" placeholder='Password' required />
          <input type="password" onInput={(e) => { setConfirmPassword(e.target.value) }} name="confirmpassword" id="confirmPasswordInput" placeholder='Confirm Password' required />

          <input type="submit" value="Register" />

          <Link to={'/login'}>Already have an Account?</Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage