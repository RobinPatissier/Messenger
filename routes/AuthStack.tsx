import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/auth/login';
import Register from '../screen/auth/register';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}