import React from 'react'

const MVP = (props) => {

  return (
    <div>
      <h1>{props.year} {props.name} </h1>
      <img src={props.image} />
      <h1>Stats</h1>
      <p>{props.batting_average}/{props.On_Base_Percentage}/{props.Slugging_Percentage}</p>
      <p>OPS: {props.OPS} OPS+: {props.OPS_Plus} WRC+: {props.WRC_Plus} </p>
      <p>WAR: {props.WAR} Walk Rate: {props.BB} Strikeout Rate: {props.K} Wins Above Replacement: {props.WPA} </p>
    </div> 
  )
  };

  export default MVP;