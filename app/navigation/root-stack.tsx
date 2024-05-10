import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, UnAuthStackParamList} from './type';
import LoginScreen from '../screens/login/login';
import CategoryScreen from '../screens/category';
import {useAppSelector} from '../redux/store';
import MainAppScreen from '../screens/main-app';

const Stack = createNativeStackNavigator<RootStackParamList>();

const UnAuthedStack = createNativeStackNavigator<UnAuthStackParamList>();

export default function RootStack() {
  const token = useAppSelector(s => s.auth.accessToken);
  if (!token) {
    return (
      <UnAuthedStack.Navigator screenOptions={{headerShown: false}}>
        <UnAuthedStack.Screen component={LoginScreen} name="login" />
      </UnAuthedStack.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="category" component={CategoryScreen} />
      <Stack.Screen name="mainscreen" component={MainAppScreen} />
    </Stack.Navigator>
  );
}
