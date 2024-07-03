import Chat from '../screen/home/chat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}