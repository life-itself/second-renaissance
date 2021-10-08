import * as etl from './etl.js'


test('transform org does what it should', () => {
  const in_ = {
  }
  const exp = {
  }
  const out = etl.transformOrg(in_)
  expect(out).toStrictEqual(exp);
});
