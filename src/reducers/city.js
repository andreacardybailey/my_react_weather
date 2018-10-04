const city = (state = {}, action) => {
  switch(action.type) {
    case 'GET_CITY_PENDING':
      return state;
    case 'GET_CITY_FULFILLED':
      return {
        cityName: action.payload[0].LocalizedName,
        cityId: action.payload[0].Key, 
        isPending: false
      };
    case 'GET_CITY_REJECTED':
      return {
        error: true
      };
    default:  
      return state;
  }
};

export default city;