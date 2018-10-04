import React from 'react';

const NightForecast = (props) => {
  const currentDay = props.currentDay;
  return (
   <div className="nighttime">
    <div className="day-night-info">
      <div className="left-side">
        <h2>NIGHT</h2>
        <div className="temp">
          { Math.round(currentDay.Temperature.Minimum.Value) }&deg;
          <span className="label">LO</span>
        </div>
      </div>
      <img src={ process.env.PUBLIC_URL + "/weather_icons/" + currentDay.Night.Icon + "-s.png" } alt="weather" />
    </div>
    <p>{ currentDay.Night.IconPhrase }</p>
  </div>
  )
}

export default NightForecast;