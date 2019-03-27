import EmployeeDetails from './EmployeeDetails'
import {
  createStackNavigator, createAppContainer,
} from 'react-navigation';
import EmployeeList from './EmployeeList';

const AppNavigator = createStackNavigator({
  list: {
    screen: EmployeeList,
    navigationOptions: () => ({
      title: 'Employees',
    })
  },
  details: {
    screen: EmployeeDetails,
    navigationOptions: () => ({
      title: 'Details',
    })
  }}, {
    initialRouteName: 'list'
  });
export default createAppContainer(AppNavigator);