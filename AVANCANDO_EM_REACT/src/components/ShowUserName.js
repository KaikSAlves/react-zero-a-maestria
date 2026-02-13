import React from 'react'

const ShowUserName = (props) => {

  return (
    <div>
        <h1>
            Props
        </h1>
        <h2>
            O nome do usuário por variável é : {props.name} <br />
            O nome do usuário por useState é: {props.useStateName}
        </h2>
    </div>
  )
}

export default ShowUserName