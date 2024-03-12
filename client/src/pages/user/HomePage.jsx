import React from 'react'
import { Link } from 'react-router-dom'

import { LuArrowRight } from "react-icons/lu";

const HomePage = () => {
	return (
		<div id='homeContainer'>
			<div id='welcome'>
				<h2>Welcome to our website</h2>
				<span className='companyName'>Vahann Value.</span>
				<p>The <b>Vahann Value.</b> Web App offers accurate price estimates for used cars based on varied factors like make, model ,age, mileage, market trends etc bridging info gaps for buyers and sellers, promoting transparency, fair pricing, and informed choices in the market.</p>
			</div>


			<Link className='predictHereBtn userSelectNone' to={'/predictor'}>Predict Here <LuArrowRight /></Link>
		</div>
	)
}

export default HomePage