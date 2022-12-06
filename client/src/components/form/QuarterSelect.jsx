import React from 'react'

function QuarterSelect({QKey, change}) {
  return (
    <select key={QKey} name='quarter' id='quarter' onChange={change}>
        <option value=''>--What quarter would you like to view--</option>
        <option value="Q1">January-March</option>
        <option value="Q2">April-June</option>
        <option value="Q3">July-September</option>
        <option value="Q4">October-December</option>
    </select>
  )
}

export default QuarterSelect