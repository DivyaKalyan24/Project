import React from 'react'
const AboutPage = () => {
    return (
        <div id='aboutContainer'>
            <div id='aboutUsContainer'>
                <h2>About Us</h2>
                <p>The <b>Car Prediction System.</b> Web App offers accurate price estimates for used cars based on varied factors like make, model ,age, mileage, market trends etc bridging info gaps for buyers and sellers, promoting transparency, fair pricing, and informed choices in the market.</p>
            </div>
            <div className='othersContainer'>
                <div>
                    <h3>Interface</h3>
                    <p> Create a user-friendly web application that predicts the value of used vehicles.</p>
                </div>
                <div>
                    <h3>Reliable and Accurate</h3>
                    <p>Offer precise and up-to-date price estimates to users, enhancing their confidence in the market.</p>
                </div>
                <div>
                    <h3>ML Model</h3>
                    <p>Utilize machine learning algorithms to analyze factors such as make, model, age, mileage, and market trends.</p>
                </div>
            </div>
        </div>
    )
}
export default AboutPage