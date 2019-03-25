import WidgetList from './WidgetList';
import {
  createStackNavigator, createAppContainer,
} from 'react-navigation';

const AppNavigator = createStackNavigator({
  list: {
    screen: WidgetList,
    navigationOptions: () => ({
      title: 'Dashboard',
    })
  }}, {
    initialRouteName: 'list'
  });
export default createAppContainer(AppNavigator);