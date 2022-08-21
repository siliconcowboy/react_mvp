import React from 'react'

const MVP = (props) => {

  return (
    <div>
      <h1>#{props.key}</h1>
      <h1>Player:{props.name} </h1>
      <img src={props.image} />
    </div>
  )
  };

  export default MVP;