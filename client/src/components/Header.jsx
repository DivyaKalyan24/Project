import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import avatar from '../assets/avatar.png'
import { Context } from '..'

const HeaderComponent = () => {

    const {isAuthenticated} = useContext(Context)

    return (
        <nav className='userSelectNone'>
            <h1>Car Price Predictor.</h1>

            <div className='userPages'>
                <NavLink className={({ isActive }) => { return (isActive ? 'active' : '') }} to={'/'}>Home</NavLink>
                <NavLink className={({ isActive }) => { return (isActive ? 'active' : '') }} to={'/about'}>About</NavLink>
                <NavLink className={({ isActive }) => { return (isActive ? 'active' : '') }} to={'/services'}>Services</NavLink>
                <NavLink className={({ isActive }) => { return (isActive ? 'active' : '') }} to={'/contact'}>Contact</NavLink>
            </div>

            {
                isAuthenticated ?
                    <div>
                        <Link to={'/profile'}>
                            <img src={avatar} alt="" />
                        </Link>
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
        else{
            setShowHeader(true)
        }

    }, [location])
    
    return (
        <>{showHeader ? <HeaderComponent /> : ''}</>
    )
}

export default Header