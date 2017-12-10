export const showFiveDayForecast = (inputVal) => ({
  type: 'SHOW_FIVE_DAY_FORECAST',
  inputVal
});

export const showSelectedDay = (day) => ({
  type: ' SHOW_SELECTED_DAY',
  day
});