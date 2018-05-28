import {URL_GETTER} from './api';

it('Can get API End Point correcty', () => {
  if (!URL_GETTER.get || URL_GETTER.get.constructor !== Function) {
    throw new Error('URL_GETTER.get() is not defined');
  }

  const params = {id: 'abc'};
  const outPut = URL_GETTER.get('UPDATE_PROFILE', params);
  const expectedOutPut = 'users/abc';

  if (outPut !== expectedOutPut) {
    throw new Error(`URL_GETTER.get() is not working correctly. Output: ${outPut}. Expected Output: ${expectedOutPut}.`);
  }
});