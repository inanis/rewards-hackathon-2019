import WidgetList from './WidgetList'; 
import EmployeeDirectoryApp from './EmployeeDirectoryApp'
import {
  createStackNavigator, createAppContainer,
} from 'react-navigation';
import EmployeeList from './EmployeeList';

const AppNavigator = createStackNavigator({
  list: {
    screen: EmployeeList,
    navigationOptions: () => ({
      title: 'Dashboard',
    })
  }}, {
    initialRouteName: 'list'
  });
export default createAppContainer(AppNavigator);