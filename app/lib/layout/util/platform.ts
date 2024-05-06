import {Platform} from 'react-native';

export function web(value: any) {
  if (Platform.OS === 'web') {
    return value;
  }
}

export function ios(value: any) {
  if (Platform.OS === 'ios') {
    return value;
  }
}

export function android(value: any) {
  if (Platform.OS === 'android') {
    return value;
  }
}

export function native(value: any) {
  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    return value;
  }
}
