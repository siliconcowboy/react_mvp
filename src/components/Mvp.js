import React from 'react'

const MVP = (props) => {

  return (
    <div className="mvp">

      <h1 class="names"> #{props.rank}: {props.year} {props.name} </h1>
      <img className="images" src={props.image} />
      <h1>Stats</h1>
      <p><b>BA: </b>{props.batting_average}<b> OBP: </b>{props.On_Base_Percentage}<b> SLG: </b>{props.Slugging_Percentage}</p>
      <p><b>OPS:</b> {props.OPS} <b>OPS+:</b> {props.OPS_Plus} <b>WRC+:</b>{props.WRC_plus}</p>
      <p><b>WAR:</b> {props.WAR} <b>Walk Rate:</b> {props.BB}% <b>Strikeout Rate:</b> {props.K}% <b>Win Probability Added:</b> {props.WPA} </p>
      <p className="reason">{props.reason}</p>
    </div> 
  )
  };

  export default MVP;