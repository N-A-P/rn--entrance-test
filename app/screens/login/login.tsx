import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  PressableProps,
  View,
} from 'react-native';
import ScreenWrapper from '../../lib/layout/screen';
import {atoms} from '../../lib/layout/atoms';
import TextInput from '../../lib/ui/text-input/text-input';
import {color} from '../../lib/layout/token';
import Text from '../../lib/ui/text';
import CheckBox from '../../lib/ui/checkbox';
import {useLoginController} from './login-controller';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function LoginScreen() {
  const {
    username,
    password,
    overAge,
    onChangePass,
    onChangeUsername,
    toggleOverAge,
    onSubmit,
    onBlurPass,
    onBlurUsername,
    passwordStrength,
    isValidForm,
    usernameError,
    passLevel,
    touchedPassword,

    loading,
  } = useLoginController();
  const [enablePeakPassword, setPeakPassword] = useState(true);
  const togglePeakPassword = () => setPeakPassword(v => !v);
  const inset = useSafeAreaInsets();
  return (
    <ScreenWrapper bg={require('../../../assets/images/bg1.png')}>
      <View
        style={[
          atoms.flex_1,
          atoms.justify_between,
          atoms.px_lg,
          {marginTop: inset.top},
        ]}>
        <Pressable>
          <Image source={require('../../../assets/images/arrow.png')} />
        </Pressable>
        <Text level="h1">Let's get you started</Text>
      </View>
      <View style={[atoms.flex_2, atoms.px_lg, atoms.mt_5xl]}>
        <TextInput
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect={false}
          value={username}
          error={usernameError}
          errorColor={color.ERROR}
          underline={
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: usernameError ? color.ERROR : color.PRIMARY,
              }}
            />
          }
          onChangeText={onChangeUsername}
          label="Username"
          onBlur={onBlurUsername}
        />
        <TextInput
          autoComplete="password"
          autoCorrect={false}
          autoCapitalize="none"
          label="Password"
          maxLength={16}
          error={passwordStrength?.text}
          errorColor={passwordStrength?.color}
          onChangeText={onChangePass}
          onBlur={onBlurPass}
          value={password}
          secureTextEntry={enablePeakPassword}
          icon={
            <Pressable
              onPress={togglePeakPassword}
              style={{position: 'absolute', bottom: '20%', right: 0}}>
              <Image source={require('../../../assets/images/eye.png')} />
            </Pressable>
          }
          underline={
            touchedPassword ? (
              <View
                style={{
                  height: 1,
                  width: `${passLevel * 25}%`,
                  backgroundColor: passwordStrength?.color,
                }}
              />
            ) : (
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: color.PRIMARY,
                }}
              />
            )
          }
        />
        <View style={[atoms.my_3xl]}>
          <CheckBox
            value={overAge}
            onToggle={toggleOverAge}
            containerStyle={atoms.mr_xs}
            label="I am over 16 years of age"
          />
        </View>
        <PolicyStatement />
      </View>
      <View
        style={[
          atoms.px_lg,
          atoms.flex_row,
          atoms.align_center,
          atoms.justify_between,
          {marginBottom: inset.bottom},
        ]}>
        <Text level="h1">Sign Up</Text>
        <NextButton
          loading={loading}
          disabled={!isValidForm}
          onPress={onSubmit}
        />
      </View>
    </ScreenWrapper>
  );
}
function NextButton({loading, ...props}: PressableProps & {loading: boolean}) {
  return (
    <Pressable {...props}>
      <View
        style={{
          borderRadius: 25,
          borderWidth: 1,
          borderColor: color.PRIMARY,
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {loading ? (
          <ActivityIndicator color={color.PRIMARY} size="small" />
        ) : (
          <Image source={require('../../../assets/images/arrow-right.png')} />
        )}
      </View>
    </Pressable>
  );
}

function PolicyStatement() {
  return (
    <View style={[atoms.my_md]}>
      <Text level="subscript">
        {
          'By clicking Sign Up, you are indicating that you have read and agree to the '
        }
        <Text level="subscript" color={color.PRIMARY}>
          Terms of Service
        </Text>
        {' and '}
        <Text level="subscript" color={color.PRIMARY}>
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
}
