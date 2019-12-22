import React from 'react'

import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherFormProps}) => (
    <div className='group'>
        {
            otherFormProps.name === 'message' ?
            <textarea onChange={handleChange} {...otherFormProps} className="message form-input" />
            :
            <input className="form-input" onChange={handleChange} {...otherFormProps} />
        }
    </div>
)

export default FormInput;