import {useMemo} from 'react';
import {useAppDispatch} from '../../redux/store';
import {signUpAndSignIn} from '../../redux/auth/actions';

export function useLogin(username: string, password: string, overAge: boolean) {
  const passLevel = useMemo(() => {
    let level = 1;
    // contain upper & lowercase
    if (/(?=(.*[a-z]))(?=(.*[A-Z]))/.test(password)) {
      level++;
    }
    // contain number
    if (/(?=(.*\d))/.test(password)) {
      level++;
    }
    // contain special chars
    if (/(?=(.*\W))/.test(password)) {
      level++;
    }

    return level;
  }, [password]);

  const isValidUsername = useMemo(() => {
    // copy from internet ^^!
    // this should cover required email validation rule
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(username);
  }, [username]);

  const isValidPass = useMemo(() => {
    // this should also cover required password validation rule
    return !(password.length < 6 || password.length > 18);
  }, [password]);

  const isValidForm = isValidPass && isValidUsername && overAge;

  const dispatch = useAppDispatch();
  const onSubmit = async () => {
    await dispatch(signUpAndSignIn({username, password})).unwrap();
  };

  return {passLevel, isValidForm, isValidPass, isValidUsername, onSubmit};
}
