import { StackNavigator } from 'react-navigation';
import MainScreen from '../screens/stack/MainScreen';
import OtherScreen from '../screens/stack/OtherScreen';

const Stack = StackNavigator({
  Main: {
    screen: MainScreen,
  },
  Other: {
    screen: OtherScreen,
  }
},
{
  initialRouteName: 'Main'
});

export default Stack;
