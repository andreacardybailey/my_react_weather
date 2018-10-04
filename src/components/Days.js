import React from 'react';
import Day from './Day';
  
const Days = (props) => {
  const data = props.data;
  const currentDay = props.currentDay;
  const getSelectedDay = props.getSelectedDay;

  return (
    <div>
      <h1>Weather for { props.city }</h1>
      <div className="days">
        {
          data.map( (day, i) => {
            return (
              <Day 
                thisDay={ data[i] }
                data={ data }
                currentDay={ currentDay }
                getSelectedDay= { getSelectedDay }
                key={ i }
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Days;