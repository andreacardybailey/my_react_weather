export const getCity = (zip) => ({
  type: 'GET_CITY',
  payload: fetch(`https://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=lkzp9kzovyWmxxKEmSTxI5GQv6cxKE76&q=${zip}`)
  .then(response => response.json())
});

export const getWeather = (locationKey) => ({
  type: 'GET_WEATHER',
  payload: fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/14567_PC?apikey=lkzp9kzovyWmxxKEmSTxI5GQv6cxKE76`)
  .then(response => response.json()),
});

export const getSelectedDay = (currentDay) => ({
  type: 'GET_SELECTED_DAY',
  currentDay: function() { 
    return { today: currentDay };
  }
});


