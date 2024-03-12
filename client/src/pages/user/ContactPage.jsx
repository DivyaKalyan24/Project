import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Context } from '../..'

const SERVER_URL = 'http://127.0.0.1:5500'

const ContactPage = () => {

    const {user} = useContext(Context)

    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState(user.email)
    const [issue, setIssue] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const result = await axios.post(`${SERVER_URL}/api/v1/send-email`, {
                fullname,
                email,
                issue
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true
                })

            if (result.status === 200) {
                toast.success(result.data.message)
            }

        }
        catch (err) {
            toast.error(err.message)
        }

        onReset()
    }

    const onReset = () => {
        setFullName('')
        setEmail('')
        setIssue('')
    }

    return (
        <div id='contactPageContainer'>
            <h2>Contact Us</h2>
            <div id='contactContainer'>
                <form onSubmit={onSubmit} className='userSelectNone infoForm'>


                    <div id={`fullNameContainer`}>
                        <label htmlFor={'fullNameInput'}>{'Full Name'}</label>
                        <input type="text" id='fullNameInput' placeholder='Enter your Full Name' onInput={e => setFullName(e.target.value)} name='fullname' value={fullname} required />
                    </div>
                    <div id={`emailContainer`}>
                        <label htmlFor={'emailInput'}>{'Email'}</label>
                        <input type="email" id='emailInput' placeholder='Enter your Email' onInput={e => setEmail(e.target.value)} name='email' value={email} required />
                    </div>
                    <div id={`issueContainer`}>
                        <label htmlFor={'issueInput'}>{'Issue'}</label>
                        <textarea rows={4} cols={10} id='issueInput' placeholder='Report any Issue' onInput={e => setIssue(e.target.value)} name='issue' value={issue} required />
                    </div>


                    <div className='formBtns'>
                        <button onClick={onReset} id="resetBtn">Reset</button>
                        <button type="submit" id="submitBtn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage