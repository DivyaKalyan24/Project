import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome, IoMail, IoCall } from "react-icons/io5";

import LOGO_URL from '../assets/logo.gif'

const Footer = () => {
	return (
		<div id='footerContainer'>

			<div className='logoContainer'>
			<Link to={'/'}  className='logo userSelectNone' >
                <img src={LOGO_URL} alt="logo" className='logo' />
            </Link>
				<span className='title-2 userSelectNone'>
					Vahann Value.
					<span className='underline' />
					<span className='description'>
						We offer precise and up-to-date price estimates to users, enhancing their confidence in the market.
					</span>
				</span>

				<span className='title-2 userSelectNone'>
					Useful Links
					<span className='underline' />
					<ul>
						<li>
							<Link to={'/'}>Home</Link>
						</li>
						<li>
							<Link to={'/about'}>About Us</Link>
						</li>
						<li>
							<Link to={'/predictor'}>Predictor</Link>
						</li>
						<li>
							<Link to={'/videos'}>Videos</Link>
						</li>
						<li>
							<Link to={'/contact'}>Contact Us</Link>
						</li>
					</ul>
				</span>

				<span className='title-2 userSelectNone'>
					Contact Info
					<span className='underline' />
					<ul className='contact-ul'>
						<li>
							<IoHome className='icons' /> GITAM, VSKP, 530045, IN
						</li>
						<li>
							<IoMail className='icons' /> vahann.value@gmail.com
						</li>
						<li>
							<IoCall className='icons' /> +91 98704 XXXXX
						</li>
					</ul>
				</span>

			</div>

		</div>
	)
}

export default Footer