import React from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';
import {  color } from '../../layout/token';

export type MyTextProps = TextProps & {
  level: 'h1' | 'body' | 'subscript' | 'button';
  color?: string;
};

const Text: React.FC<MyTextProps> = (props) => {
  const _color = props.color || color.TEXT_GRAY
  
  return (
    <RNText
      {...props}
      style={[styles[props.level], {color: _color}, props.style]}>
      {props?.children}
    </RNText>
  );
};


export default Text;

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Lato Regular',
    fontSize: 22,
  },
  body: {
    fontFamily: 'Lato Regular',
    fontSize: 14,
  },
  subscript: {
    fontFamily: 'Lato Medium',
    fontSize: 12,
  },
  button: {
    fontFamily: 'Lato Regular',
    fontSize: 16,
  },
});