/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {registerScreens} from 'react-native-navigation-register-screens';
import {Provider} from 'react-redux';
import MoreScreen from './src/screens/MoreScreen/MoreScreen';
import OpineScreen from './src/screens/OpineScreen/OpineScreen';
import RateNowScreen from './src/screens/RateNowScreen/RateNowScreen';
import SurveyScreen from './src/screens/SurveyScreen/SurveyScreen';
import TrendsScreen from './src/screens/TrendsScreen/TrendsScreen';
import VopineScreen from './src/screens/VopineScreen/VopineScreen';
import {store} from './src/store';

declare const global: {HermesInternal: null | {}};

export const setupRegisterScreen = () => {
  registerScreens(
    [
      RateNowScreen,
      OpineScreen,
      SurveyScreen,
      TrendsScreen,
      VopineScreen,
      MoreScreen,
    ],
    (Component) => (props) => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    ),
  );
};
