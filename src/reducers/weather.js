const weather = (state = {}, action) => {
  switch(action.type) {
    case 'GET_WEATHER_PENDING':
      return state;
    case 'GET_WEATHER_FULFILLED':
      return {
        isPending: false,
        dailyForecasts: action.payload.DailyForecasts
      };
    case 'GET_WEATHER_REJECTED':
      return {
        error: true
      };
    default:  
      return state;
  }
};




export default weather;