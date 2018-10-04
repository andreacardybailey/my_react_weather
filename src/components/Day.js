import React from 'react';
import classNames from 'classnames';

class Day extends React.Component {
  formatDate(datetime) {
    let thisdate = new Date(datetime);
    return thisdate.toLocaleDateString('en-US', 
      {  
        month: 'short', 
        day: 'numeric' 
      });
  }
  getDayOfWeek(datetime) {
    let thisdate = new Date(datetime);
    return thisdate.toLocaleDateString('en-US', 
      { 
        weekday: 'short'
      });
  }
  render() {
    const thisDay = this.props.thisDay;
    const classes = classNames({
      day: true,
      selected: thisDay === this.props.currentDay.today
    });

    return (
      <div className={ classes } onClick={ () => this.props.getSelectedDay(thisDay) }>
        <h2>{ this.getDayOfWeek(thisDay.Date) }</h2>
        <h3>{ this.formatDate(thisDay.Date) }</h3>
        <img src={ process.env.PUBLIC_URL + "/weather_icons/" + thisDay.Day.Icon + "-s.png" } alt="weather" />
        <div className="degrees">
          <span className="high">{ thisDay.Temperature.Maximum.Value }&deg;</span>/{ thisDay.Temperature.Minimum.Value }&deg;
        </div>
        <p>{ thisDay.Day.IconPhrase }</p>
      </div>
    )
  }
}

export default Day;