import {useMemo, useState} from 'react';
import {useLogin} from './use-login';
import {Alert} from 'react-native';
import {color} from '../../lib/layout/token';

export function useLoginController() {
  const [username, setUsername] = useState('');
  const [touchedUsername, setTouchedUsername] = useState(false);

  const [password, setPassword] = useState('');
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [overAge, setOverAge] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChangeUsername = (v: string) => {
    setUsername(v);
  };
  const onChangePass = (v: string) => {
    setTouchedPassword(true);
    setPassword(v);
  };
  const onBlurUsername = () => {
    if (username) {
      setTouchedUsername(true);
    }
  };
  const onBlurPass = () => {
    if (password) {
      setTouchedPassword(true);
    }
  };
  const toggleOverAge = () => setOverAge(v => !v);

  const {passLevel, isValidForm, isValidPass, isValidUsername, onSubmit} =
    useLogin(username, password, overAge);

  const passwordStrength = useMemo(() => {
    if (!touchedPassword) {
      return {text: '', color: undefined};
    }
    if (!isValidPass) {
      return {text: 'Too Short', color: undefined};
    }
    switch (passLevel) {
      case 1:
        return {text: 'Weak', color: color.ERROR};
      case 2:
        return {text: 'Fair', color: color.WARNING};
      case 3:
        return {text: 'Good', color: color.PRIMARY};
      case 4:
        return {text: 'Strong', color: color.SUCCESS};
    }
  }, [passLevel, isValidPass, touchedPassword]);

  const _onSubmit = async () => {
    setLoading(true);
    try {
      await onSubmit();
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
    setLoading(false);
  };

  const usernameError = useMemo(() => {
    if (!touchedUsername) {
      return '';
    }
    if (!isValidUsername) {
      return 'Please input a valid email';
    }

    return '';
  }, [isValidUsername, touchedUsername]);

  return {
    username,
    password,
    overAge,
    toggleOverAge,
    onChangePass,
    onChangeUsername,
    passLevel,
    isValidPass,
    isValidUsername,
    isValidForm,
    onSubmit: _onSubmit,
    passwordStrength,
    onBlurUsername,
    onBlurPass,
    loading,
    usernameError,
    touchedPassword,
  };
}
