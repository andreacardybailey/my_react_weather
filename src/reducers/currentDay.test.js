import currentDay from './currentDay';
import {getSelectedDay} from '../actions/actionCreators';

const initialState = {
  weather: { isPending: true, dailyForecasts: [{dummyData:"data"}] },
  city: { cityName: "Boca", cityId: "123d" },
  currentDay: function() { 
    return {today: this.weather.dailyForecasts[0]}
  }
};

const aDay = {day: 'Tomorrow'};

describe('currentDay reducer', () => {
  it('should return the initial state', () => {
    expect(
      currentDay(initialState, {})
    ).toEqual(
      initialState
    );
  });
});