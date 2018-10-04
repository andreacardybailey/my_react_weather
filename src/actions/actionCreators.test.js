import {getCity} from './actionCreators';
import {getWeather} from './actionCreators';
import {getSelectedDay} from './actionCreators';

describe('getSelectedDay', () => {
  it('Should return the action', () => {
    const currentDay = {testWeatherData: 'test'};
    const action = getSelectedDay(currentDay);
    expect(action.type).toEqual('GET_SELECTED_DAY');
    expect(action.currentDay()).toEqual({today:currentDay});
  });
});

