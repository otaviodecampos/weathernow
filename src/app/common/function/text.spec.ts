import { removeWhitespaces } from '@app/common/function/text';

describe('TextFunctions', () => {

  it('should remove whitespaces', () => {
    expect(removeWhitespaces(' t e s t  ')).toEqual('test');
  });

});
