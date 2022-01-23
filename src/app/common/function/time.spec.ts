import {
  differenceInMilliseconds,
  differenceInMinutes,
  millisecondsToMinutes,
  minutesToMilliseconds
} from '@app/common/function/time';

describe('TimeFunctions', () => {

  it('should convert minute to milliseconds', () => {
    expect(minutesToMilliseconds(1)).toEqual(60000);
  });

  it('should convert milliseconds to minute', () => {
    expect(millisecondsToMinutes(60000)).toEqual(1);
  });

  it('should have 60 minutes difference', () => {
    const date1 = new Date('01/01/2000 01:00');
    const date2 = new Date('01/01/2000 02:00');
    expect(differenceInMinutes(date1, date2)).toEqual(60);
  });

  it('should have 60000 milliseconds difference', () => {
    const date1 = new Date('01/01/2000 01:00');
    const date2 = new Date('01/01/2000 01:01');
    expect(differenceInMilliseconds(date1, date2)).toEqual(60000);
  });

});
