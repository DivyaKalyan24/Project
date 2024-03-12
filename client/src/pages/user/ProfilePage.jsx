import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import axios from 'axios'

const AUTH_URL = 'http://127.0.0.1:5500'

const ProfilePage = () => {
    const { user } = useContext(Context)
    
    const [id, setId] = useState(user.id)
    const [firstName, setFirstName] = useState(user.firstname)
    const [lastName, setLastName] = useState(user.lastname)
    const [email, setEmail] = useState(user.email)
    
    useEffect(() => {
        setId(user.id)
        setFirstName(user.firstname)
        setLastName(user.lastname)
        setEmail(user.email)
    }, [user])
    
    const onSubmit = async (e) => {
        e.preventDefault()
        
        await axios.post(`${AUTH_URL}/api/v1/update-profile`, {
            firstName,
            lastName
        }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        })
    }
    
    return (
        <div id='profilePageContainer'>
            <h2>Profile</h2>
            <div id='profileContainer'>
                <form onSubmit={onSubmit} className='userSelectNone infoForm'>
                    <div id={`idContainer`}>
                        <label htmlFor={'idInput'}>{'ID'}</label>
                        <input type="text" id='firstNameInput' placeholder='Enter your ID' onInput={e => setId(e.target.value)} name='id' value={id} required disabled />
                    </div>
                    <div id={`firstNameContainer`}>
                        <label htmlFor={'firstNameInput'}>{'First Name'}</label>
                        <input type="text" id='firstNameInput' placeholder='Enter your First Name' onInput={e => setFirstName(e.target.value)} name='firstname' value={firstName} required />
                    </div>
                    <div id={`lastNameContainer`}>
                        <label htmlFor={'lastNameInput'}>{'Last Name'}</label>
                        <input type="text" id='lastNameInput' placeholder='Enter your Last Name' onInput={e => setLastName(e.target.value)} name='lastname' value={lastName} required />
                    </div>
                    <div id={`emailContainer`}>
                        <label htmlFor={'emailInput'}>{'Email'}</label>
                        <input type="email" id='emailInput' placeholder='Enter your Email' onInput={e => setEmail(e.target.value)} name='email' value={email} required disabled />
                    </div>

                    <div className='formBtns'>
                        <button type="submit" id="submitBtn">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfilePage