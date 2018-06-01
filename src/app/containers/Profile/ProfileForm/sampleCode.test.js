import state from './sampleCode';

// npm run test sampleCode
describe('sampleCode', () => {
  it('Check state.firstName correct', () => {
    expect(state.firstName).toMatch('Vi Ha');
  });

  it('Check state.lastName correct', () => {
    expect(state.lastName).toMatch('Ha');
  });

  it('Check state.errors is object', () => {
    expect(state.errors).toMatchObject({
      firstName: expect.any(String),
      lastName: expect.any(String),
    });
  });

  it('Check state.errors.firstName correct', () => {
    expect(state.errors.firstName).toMatch('ERROR');
  });

  it('Check state.errors.lastName correct', () => {
    expect(state.errors.lastName).toMatch('');
  });
});
