import { createStackNavigator, createAppContainer } from 'react-navigation';

// Import other activities.
import Home from './activity/Home';
import Scan from './activity/Scan';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Scan: { screen: Scan },
});

const App = createAppContainer(MainNavigator);

// Stop socket.io from creating insignificant warning
console.ignoredYellowBox = ['Remote debugger'];
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

export default App;