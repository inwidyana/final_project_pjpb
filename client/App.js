import { createStackNavigator, createAppContainer } from 'react-navigation';

// Import other activities.
import Home from './activity/Home';
import Scan from './activity/Scan';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Scan: { screen: Scan },
});

const App = createAppContainer(MainNavigator);

export default App;