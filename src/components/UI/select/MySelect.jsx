
import React from 'react'

function MySelect({options, defaultValue, value, onChange}) {
  return (
    <div>
        <select
        value={value}
        onChange={event => onChange(event.target.value)}>
          <option disabled={true} value="" key="">
            {defaultValue}
          </option>
          {options.map(option => <option value={option.value} key={option.value}>{option.name}</option>)}
          {}
        </select>
    </div>
  )
}

export default MySelect