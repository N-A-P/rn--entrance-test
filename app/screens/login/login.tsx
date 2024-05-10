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
import TextInput from '../../lib/ui/text-input';
import {color} from '../../lib/layout/token';
import Text from '../../lib/ui/text';
import CheckBox from '../../lib/ui/checkbox';
import {useLoginController} from './login-controller';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
    <ScreenWrapper
      bgScale={1.15}
      bg={require('../../../assets/images/bg1.png')}>
      <View
        style={[
          atoms.justify_between,
          atoms.px_xl,
          {marginTop: inset.top + atoms.pt_md.paddingTop},
        ]}>
        <Pressable>
          <Image source={require('../../../assets/images/arrow.png')} />
        </Pressable>
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={[atoms.justify_end, atoms.flex_1, atoms.px_xl]}>
        <View style={atoms.mb_2xl}>
          <Text level="h1">Let's get you started!</Text>
        </View>
        <TextInput
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect={false}
          value={username}
          error={usernameError}
          keyboardType="email-address"
          errorColor={color.ERROR}
          returnKeyType="next"
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
          label="Your email"
          onBlur={onBlurUsername}
        />
        <TextInput
          autoComplete="password"
          autoCorrect={false}
          autoCapitalize="none"
          label="Your password"
          maxLength={16}
          error={passwordStrength?.text}
          errorColor={passwordStrength?.color}
          onChangeText={onChangePass}
          onBlur={onBlurPass}
          // keyboardType='visible-password'
          value={password}
          returnKeyType="go"
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
        <View style={[atoms.my_4xl]}>
          <CheckBox
            value={overAge}
            onToggle={toggleOverAge}
            containerStyle={atoms.mr_xs}
            label="I am over 16 years of age"
          />
        </View>
        <PolicyStatement />

        <View
          style={[
            atoms.flex_row,
            atoms.align_center,
            atoms.justify_between,
            atoms.mt_2xl,
            {marginBottom: inset.bottom + atoms.pb_md.paddingBottom},
          ]}>
          <Text style={[atoms.font_semibold]} level="button">
            Sign Up
          </Text>
          <NextButton
            loading={loading}
            disabled={!isValidForm}
            onPress={onSubmit}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
}
function NextButton({
  loading,
  disabled,
  ...props
}: PressableProps & {loading: boolean}) {
  return (
    <Pressable {...props} disabled={disabled}>
      <View
        style={{
          borderRadius: 25,
          borderWidth: 1,
          borderColor: color.PRIMARY,
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: disabled ? 0.5 : 1,
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
      <Text level="subscript" color={color.TEXT_GRAY}>
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
