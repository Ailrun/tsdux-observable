import { compileTs as compile } from '../test-utilities';

test('toPayload', () => {
  expect(compile('./ts-tests/toPayload.ts')).toMatchSnapshot();
});
