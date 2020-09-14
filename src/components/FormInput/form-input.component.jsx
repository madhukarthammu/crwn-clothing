import React from 'react'
import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherprops}) => (
    <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherprops}  />
    { 
      <label className={` ${otherprops.value.length ? 'shrink' : null} form-input-label`}>{label}</label>
    }
   
  </div>
)

export default FormInput;