import { createStackNavigator, createAppContainer } from 'react-navigation';

// Import other activities.
import Scan from './activity/Scan';
import Home from './activity/Home';
import Registration from './activity/Registration';
import Login from './activity/Login';
import ScanMe from './activity/ScanMe';
import AddFriend from './activity/AddFriend';

const MainNavigator = createStackNavigator(
  {
    Scan: { screen: Scan },
    Home: { screen: Home },
    Registration: { screen: Registration },
    Login: { screen: Login },
    ScanMe: { screen: ScanMe },
    Chat: { screen: Chat },
    AddFriend: { screen: AddFriend },
  }, 
  {
    initialRouteName: 'Login',
  });

const App = createAppContainer(MainNavigator);

// Stop socket.io from creating insignificant warning
console.ignoredYellowBox = ['Remote debugger'];
import { YellowBox } from 'react-native';
import Chat from './activity/Chat';
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

export default App;