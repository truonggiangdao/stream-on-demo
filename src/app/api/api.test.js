import {parseAPIUrl, END_POINT_KEYS} from './api';

it('Can get API End Point correcty', () => {
  if (!parseAPIUrl || parseAPIUrl.constructor !== Function) {
    throw new Error('parseAPIUrl is not defined');
  }

  const params = {id: 'abc'};
  const outPut = parseAPIUrl(END_POINT_KEYS.USER_PROFILE, params);
  const expectedOutPut = 'users/abc';

  if (outPut !== expectedOutPut) {
    throw new Error(`parseAPIUrl() is not working correctly. Output: ${outPut}. Expected Output: ${expectedOutPut}.`);
  }
});