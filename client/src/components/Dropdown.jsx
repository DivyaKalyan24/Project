import React from 'react'

const Dropdown = ({ id, values, placeholder, company, onChange, type, name }) => {

    return (
        <>
            <div id={`${id}Container`}>
                <label htmlFor={id}>{name}</label>
                <select value={type} onChange={onChange} name={id} id={id} required>
                    <option value={''} style={{ display: 'none' }}>{placeholder}</option>
                    {
                        values.map((e, ind) => {
                            if(company !== undefined || company !== ''){
                                e = e.toString()
                                if(e.includes(company)){
                                    return (<option key={ind} value={e}>{e}</option>)
                                }
                            }
                            return ''
                        })
                    }
                </select>
            </div>
        </>
    )
}

export default Dropdown