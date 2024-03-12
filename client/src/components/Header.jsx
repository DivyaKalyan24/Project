import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { IoLogOut } from "react-icons/io5";
import axios from 'axios';
import toast from 'react-hot-toast';
import LOGO_URL from '../assets/logo.gif'

import avatar from '../assets/avatar.png'
import { Context } from '..'

const AUTH_URL = 'http://127.0.0.1:5500'


const HeaderComponent = () => {

    const { isAuthenticated, setIsAuthenticated } = useContext(Context)

    const logout = async () => {
        try {

            const result = await axios.get(`${AUTH_URL}/api/v1/logout`,
                {
                    withCredentials: true
                }
            )

            console.log(result)
            if (result.data.status === 'Success') {
                toast.success(result.data.message)
                console.log(isAuthenticated)
                setIsAuthenticated(false)
            }
        }
        catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <nav className='userSelectNone'>

            <Link to={'/'}  className='logo' >
                <img src={LOGO_URL} alt="logo" className='logo' />
            </Link>

            <div className='userPages'>
                <NavLink className={({ isActive }) => { return (isActive ? 'active' : '') }} to={'/'}>Home</NavLink>
                <NavLink className={({ isActive }) => { return (isActive ? 'active' : '') }} to={'/about'}>About Us</NavLink>
                <NavLink className={({ isActive }) => { return (isActive ? 'active' : '') }} to={'/predictor'}>Predictor</NavLink>
                <NavLink className={({ isActive }) => { return (isActive ? 'active' : '') }} to={'/videos'}>Videos</NavLink>
                <NavLink className={({ isActive }) => { return (isActive ? 'active' : '') }} to={'/contact'}>Contact Us</NavLink>
            </div>

            {
                isAuthenticated ?
                    <div className='profileLinks'>
                        <Link to={'/profile'}>
                            <img src={avatar} alt="" />
                        </Link>
                        <button onClick={logout}><IoLogOut /></button>

                    </div>
                    :
                    <div className='authPages'>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>

            }

        </nav>
    )


}

const Header = () => {
    const [showHeader, setShowHeader] = useState(true)


    const location = useLocation().pathname

    useEffect(() => {
        if (location === '/login' || location === '/register') {
            setShowHeader(false)
        }
        else {
            setShowHeader(true)
        }

    }, [location])

    return (
        <>{showHeader ? <HeaderComponent /> : ''}</>
    )
}

export default Header