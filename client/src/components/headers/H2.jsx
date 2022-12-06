import React from 'react'

function H2(props) {
    const render = (props) => {
        if(props.name.username) {
            return <h2>Viewing points for {props.name.username}.</h2>
        } else return <h2>Select a User to view thier points accrual!</h2>
    }
  return (
    render(props)
  )
}

export default H2