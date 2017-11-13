import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class SettingScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Configuración',
  };

  render() {
    return <ExpoConfigView />;
  }
}
