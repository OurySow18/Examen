import { createStackNavigator } from '@react-navigation/stack';
import Home from '../sreens/Home';
import Options from '../sreens/Options';
import Quiz from '../sreens/Quiz/Quiz';
import Result from '../sreens/Result/Result';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Options" component={Options} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} /> 
    </Stack.Navigator>
  );
}

export default  MyStack