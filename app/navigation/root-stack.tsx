import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './type';
import LoginScreen from '../screens/login/login';
import CategoryScreen from '../screens/category/category';

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStack(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name='login'  component={LoginScreen}/>
            <Stack.Screen name='category' component={CategoryScreen}/>
        </Stack.Navigator>
    )
}