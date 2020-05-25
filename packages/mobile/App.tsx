/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';

// Here we can import new screens
import TabNavigation from './src/config/routing/TabNavigation';
import { AuthStackScreen } from './src/config/routing/AppNavigation';


export default class App extends Component {
  render() {
    return <AuthStackScreen />;
  }
}
