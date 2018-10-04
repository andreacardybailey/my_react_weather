import React from 'react';
import DayForecast from './DayForecast';
import NightForecast from './NightForecast';
  
const DetailedForecast = (props) => {
  if(props.currentDay.today === undefined){
    return null;
  }
  else {
    return (
      <div className="details">
        <DayForecast currentDay={ props.currentDay.today} />
        <NightForecast currentDay={ props.currentDay.today } />
      </div>
    )
  }
}

export default DetailedForecast;