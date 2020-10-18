import {Navigation} from 'react-native-navigation';
import {setupRegisterScreen} from './App';
import {setMainNavRoot} from './src/navigation/setMainNavRoot';

// Register App Screen
setupRegisterScreen();

Navigation.events().registerAppLaunchedListener(() => {
  // Each time the event is received you should call Navigation.setRoot
  setMainNavRoot();
});
