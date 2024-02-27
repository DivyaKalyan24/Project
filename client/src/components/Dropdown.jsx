import React from 'react'

const Dropdown = ({ id, values, placeholder, onChange, type, name }) => {

    return (
        <>
            <div id={`${id}Container`}>
                <label htmlFor={id}>{name}</label>
                <select value={type} onChange={onChange} name={id} id={id} required>
                    <option value={''} style={{ display: 'none' }}>{placeholder}</option>
                    {
                        values.map((e, ind) => {
                            return (<option key={ind} value={e}>{e}</option>)
                        })
                    }
                </select>
            </div>
        </>
    )
}

export default Dropdown