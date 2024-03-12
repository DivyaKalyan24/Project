import React from 'react'
import { IoCheckmarkCircle, IoWarning } from "react-icons/io5";

const Model = ({ data, onCancelClick, onPredictOtherClick }) => {

    const IndianFormatter = new Intl.NumberFormat('en-IN')
    const formatedPrice = `₹${IndianFormatter.format(data)}`

    if (!formatedPrice.includes('NaN')) {
        return (
            <>
                <div className='transparentBg'>
                </div>
                <div className='modelContainer'>
                    <div className='modalTitle'>
                        <IoCheckmarkCircle className='icon checkIcon' />
                        <h5>Prediction Value</h5>
                    </div>
                    <p>Approximate Value of Car is :- <b>{formatedPrice}</b></p>

                    <div className='modalBtns'>
                        <button onClick={onCancelClick}>Cancel</button>
                        <button onClick={onPredictOtherClick} className='predictBtn'>Predict Other</button>
                    </div>
                </div>
            </>
        )
    }
    else{
        return (
            <>
                <div className='transparentBg'>
                </div>
                <div className='modelContainer'>
                    <div className='modalTitle'>
                        <IoWarning className='icon warningIcon' />
                        <h5>Error</h5>
                    </div>
                    <p>Unexpected Error has been occured :- <b>{data}</b></p>
    
                    <div className='modalBtns'>
                        <button onClick={onCancelClick}>Cancel</button>
                        <button onClick={onPredictOtherClick} className='retryBtn'>Retry</button>
                    </div>
                </div>
            </>
        )
    }    
}

export default Model