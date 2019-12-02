/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import bgMessage from './bgMessage';
import bgActions from './bgActions';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessage) // <-- Add this line
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundNotificationAction', () => bgActions)
