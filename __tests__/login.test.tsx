/**
 * @format
 */

import 'react-native';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {useLogin} from '../app/screens/login';

it('should give correct password level', () => {
  const {passLevel} = useLogin('user@mail.com', '1j2nasd', true);
  // expect(passLevel).toBe(2);
});
