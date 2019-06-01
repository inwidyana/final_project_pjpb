import { createStackNavigator, createAppContainer } from 'react-navigation';

// Import other activities.
import Home from './activity/Home';
import Scan from './activity/Scan';
import Registration from './activity/Registration';
import Login from './activity/Login';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Scan: { screen: Scan },
  Registration: { screen: Registration },
  Login: { screen: Login },
});

const App = createAppContainer(MainNavigator);

// Stop socket.io from creating insignificant warning
console.ignoredYellowBox = ['Remote debugger'];
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

export default App;