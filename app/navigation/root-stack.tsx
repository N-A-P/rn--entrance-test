import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';
import LoginScreen from '../screens/login/login';
import CategoryScreen from '../screens/category/category';
import {useAppSelector} from '../redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  const token = useAppSelector(s => s.auth.accessToken);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!token ? (
        <Stack.Screen name="login" component={LoginScreen} />
      ) : (
        <Stack.Screen name="category" component={CategoryScreen} />
      )}
    </Stack.Navigator>
  );
}
