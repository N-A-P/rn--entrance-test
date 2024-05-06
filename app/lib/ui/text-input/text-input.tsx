import React, {useEffect} from 'react';
import {
  TextInput as RNTextInput,
  Animated,
  StyleSheet,
  TextInputProps,
  View,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Easing,
} from 'react-native';
import {atoms} from '../../layout/atoms';
import {color} from '../../layout/token';
import {useRef} from 'react';
// import Text from "../text/Text";
import Text from '../text';

type Props = {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  errorColor?: string;
  underline?: React.ReactNode;
} & TextInputProps;

const LABEL_Y = 50;
export default function TextInput({
  label,
  error,
  icon,
  underline,
  errorColor,
  ...props
}: Props) {
  const labelY = useRef(new Animated.Value(LABEL_Y)).current; // Initial value for opacity: 0
  const valRef = useRef('');
  const errorHeight = useRef(new Animated.Value(0)).current;

  const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    props.onBlur?.(e);
    if (valRef.current.length > 0) {
      return;
    }
    Animated.timing(labelY, {
      toValue: LABEL_Y,
      duration: 150,
      useNativeDriver: true,
      easing: Easing.cubic,
    }).start();
  };

  const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    Animated.timing(labelY, {
      toValue: 15,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.exp,
    }).start();
    props.onFocus?.(e);
  };
  const onChangeText = (v: string) => {
    props.onChangeText?.(v);
    valRef.current = v;
  };

  useEffect(() => {
    let value = 0;
    if (error && error.length > 0) {
      value = 20;
    }

    Animated.timing(errorHeight, {
      toValue: value,
      duration: 200,
      useNativeDriver: false,
      isInteraction: true,
    }).start();
  }, [error]);

  return (
    <View>
      <Animated.Text style={[style.lb, {transform: [{translateY: labelY}]}]}>
        {label}
      </Animated.Text>
      <View>
        <RNTextInput
          style={style.ip}
          {...props}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {underline && <View style={style.underline}>{underline}</View>}
        {icon}
      </View>
      <Animated.View
        style={[atoms.self_end, atoms.mt_md, {height: errorHeight}]}>
        <Text level="body" color={errorColor}>
          {error}
        </Text>
      </Animated.View>
    </View>
  );
}
const style = StyleSheet.create({
  ip: {
    paddingVertical: 10,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255, 0.42)',
    color: '#fff',
    ...atoms.text_md,
  },
  underline: {position: 'absolute', bottom: 1, left: 0, right: 0},
  lb: {
    color: color.TEXT_GRAY,
    ...atoms.text_sm,
  },
});
