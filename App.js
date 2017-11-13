import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Alert, Image } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import { AppLoading, Asset, Font, Constants, Facebook } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import MainTabNavigator from './navigation/MainTabNavigator'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todos from './redux/todos'
import devToolsEnhancer from 'remote-redux-devtools'

const store = createStore(todos, devToolsEnhancer())

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isLoggedIn: false,
  }

  _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '164023457482938',
        { permissions: ['public_profile'], behavior: 'native' }
      )

      switch (type) {
        case 'success': {
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const profile = await response.json();
          Alert.alert(
            'Inicio Sesión!',
            `Bienvenido, ${profile.name}!`,
          )
          this.setState({ isLoggedIn: true })
          break
        }
        case 'cancel': {
          Alert.alert(
            'Cancelado!',
            'Inicio Sesión Cancelado!',
          )
          break
        }
        default: {
          Alert.alert(
            'Oops!',
            'Inicio Sesión Fallo!',
          )
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Inicio Sesión Fallo!',
      )
    }
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else if (!this.state.isLoggedIn) {
      return (
        <View style={styles.container}>
          <Image source={ require('./assets/icons/app-icon.png') } />
          <Divider style={ styles.divider } />
          <Button
            onPress={this._handleFacebookLogin}                
            title='Iniciar Sesión'/>
        </View>
      )
    } else {
      return (
        <Provider store={store}>
            <MainTabNavigator />
        </Provider>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/icons/app-icon.png'),
      ]),
      Font.loadAsync([
        Ionicons.font,
        { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
      ]),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2e4964',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  divider: { 
    height: 10,
    backgroundColor: 'white',
  }
});
