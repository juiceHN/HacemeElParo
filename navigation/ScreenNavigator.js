import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Header, Icon } from 'react-native-elements'
import TodoScreen from '../screens/TodoScreen';
import PublishAdScreen from '../screens/PublishAdScreen';
import PackScreen from '../screens/PackScreen';
import SettingScreen from '../screens/SettingScreen';

export const TodoScreenNavigator = StackNavigator(
  {
    TodosScreenNavigator: {
      screen: TodoScreen,
    },
    PublishAdNavigator: {
      screen: PublishAdScreen,
    }
  }
);

export const PackScreenNavigator = StackNavigator(
  {
    PackScreenNavigator: {
      screen: PackScreen,
    }
  }
);

export const SettingScreenNavigator = StackNavigator(
  {
    SettingScreenNavigator: {
      screen: SettingScreen,
    }
  }
);