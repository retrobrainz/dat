import { dat } from '.';

describe('dat', () => {
  it('normal', async () => {
    expect(dat('Foo', 'Bar')).toBe('Foo Bar');
  });

  it('lastName upper case', async () => {
    expect(dat('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});
