import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

const Nav = createStackNavigator(
  {
    Home: { screen: Home },
    Dashboard: { screen: Dashboard }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#ffffff",
      headerStyle: {}
    }
  }
);

export default createAppContainer(Nav);
