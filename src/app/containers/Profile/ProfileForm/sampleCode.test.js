import state from './sampleCode';

// npm run test sampleCode
describe('sampleCode', () => {
  it('sampleCode:Check state.firstName', () => {
    expect(state.firstName).toMatch('Vi Ha');
  });

  it('sampleCode:Check state.lastName', () => {
    expect(state.lastName).toMatch('Ha');
  });

  it('sampleCode:Check state.errors', () => {
    expect(state.errors).toMatchObject({
      firstName: expect.any(String),
      lastName: expect.any(String),
    });
  });

  it('sampleCode:Check state.errors.firstName', () => {
    expect(state.errors.firstName).toMatch('ERROR');
  });

  it('sampleCode:Check state.errors.lastName', () => {
    expect(state.errors.lastName).toMatch('');
  });
});
