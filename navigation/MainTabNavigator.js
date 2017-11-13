import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { TodoScreenNavigator, PackScreenNavigator, SettingScreenNavigator } from './ScreenNavigator';

export default DrawerNavigator(
  {
    Todos: {
      screen: TodoScreenNavigator,
    },
    Packs: {
      screen: PackScreenNavigator,
    },
    Settings: {
      screen: SettingScreenNavigator,
    },
  },
);

