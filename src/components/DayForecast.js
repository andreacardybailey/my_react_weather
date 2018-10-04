import React from 'react';
  
const DayForecast = (props) => {
  const currentDay = props.currentDay;
  return (
    <div className="daytime">
      <div className="day-night-info">
        <div className="left-side">
          <h2>DAY</h2>
          <div className="temp">
            { Math.round(currentDay.Temperature.Maximum.Value) }&deg;
            <span className="label">HI</span>
          </div>
        </div>
        <img src={ process.env.PUBLIC_URL + "/weather_icons/" + currentDay.Day.Icon + "-s.png" } alt="weather" />
      </div>
      <p>{ currentDay.Day.IconPhrase }</p>
    </div>
  )
}

export default DayForecast;