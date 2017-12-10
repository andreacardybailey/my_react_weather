export const getFiveDayForecast = (inputVal) => ({
  type: 'GET_FIVE_DAY_FORECAST',
  inputVal
});

export const getSelectedDay = (day) => ({
  type: 'GET_SELECTED_DAY',
  day
});