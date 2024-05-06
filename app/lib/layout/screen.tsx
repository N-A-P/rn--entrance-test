import React from 'react';
import {
  Keyboard,
  StatusBar,
  StatusBarProps,
  TouchableWithoutFeedback,
} from 'react-native';
import {atoms} from './atoms';
import LinearGradient from 'react-native-linear-gradient';
import Background from '../ui/background';
// import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScreenWrapper({
  children,
  statusBar,
  bg,
  disableDismissKeyboard,
  bgScale,
}: {
  children: React.ReactNode;
  statusBar?: StatusBarProps;
  bg?: number;
  bgScale?: number;
  disableDismissKeyboard?: boolean;
}) {
  // const inset = useSafeAreaInsets()
  return (
    <>
      {/* <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position': undefined}
      style={atoms.flex_1}
      keyboardVerticalOffset={0}> */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        {...statusBar}
      />

      {bg !== undefined && <Background bgScale={bgScale} source={bg} />}
      <TouchableWithoutFeedback
        disabled={disableDismissKeyboard}
        onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)']}
          locations={[0, 0.4, 0.6]}
          style={atoms.flex_1}>
          {children}
        </LinearGradient>
      </TouchableWithoutFeedback>
      {/* </KeyboardAvoidingView> */}
    </>
  );
}
