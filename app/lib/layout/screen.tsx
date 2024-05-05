import React from "react";
import { KeyboardAvoidingView, Platform, StatusBar, StatusBarProps, View } from "react-native";
import { atoms } from "./atoms";
import LinearGradient from "react-native-linear-gradient";
// import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function ScreenWrapper({children, statusBar}: {children:React.ReactNode, statusBar?:StatusBarProps}){
    // const inset = useSafeAreaInsets()
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={atoms.flex_1}
        keyboardVerticalOffset={0}>
        <StatusBar barStyle='light-content' backgroundColor='transparent' {...statusBar} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)']}
            locations={[0, 0.4, 0.6]}
            style={[atoms.flex_1]}>
            {children}
          </LinearGradient>
      </KeyboardAvoidingView>
    )
}