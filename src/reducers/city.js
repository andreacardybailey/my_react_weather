const city = (state = [], action) => {
  switch(action.type) {
    case 'GET_FIVE_DAY_FORECAST':
      /**
       * IF we were not using sample data, we would look up
       * data by 'city, state' here, by using 'action.inputVal'
       * (the user's city/state combination entered in the form)
       */
      return state;
    default:  
      return state;
  }
}

export default city;