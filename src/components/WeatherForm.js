import React from 'react';
import '../css/weather-form.css';

class WeatherForm extends React.Component {
  getCity(event) {
    event.preventDefault();
    const zipCode = this.weatherFormInput.value;
    if(zipCode === "" ) {
      alert("Please enter a zip code");
    }
    else {
      this.props.getCity(zipCode);
      let path = `/weather/${zipCode}`;
      this.props.history.push(path);
    }
  }
  render() {
    return (
      <form action="" className="weather-form" onSubmit={(e) => this.getCity(e)}>
        <h1 className="form-title">Find your local weather!</h1>
        <div>
          <label htmlFor="city">Enter zip code:</label>
          <input type="text" id="city" name="city" placeholder="ex: 33487" ref={(input) => this.weatherFormInput = input} />
        </div>
        <footer>
          <input type="submit" value="Find my weather!" />
        </footer>
      </form>
    )
  }
}

export default WeatherForm;