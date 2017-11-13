import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import SimpleAd from '../components/SimpleAd'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import {
  SearchBar,
  Header
} from 'react-native-elements'


class TodoScreen extends React.Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Tareas', 
    header: <Header
      leftComponent={
        <TouchableHighlight onPress={() => navigation.navigate('DrawerToggle')} underlayColor='rgba(0,0,0,0)'>
          <View>
            <Ionicons name="md-list" size={30} color="white" />
          </View>
        </TouchableHighlight>
      }
      centerComponent={{ text: 'Tareas', style: styles.header }} 
      backgroundColor={'rgb(0,173,239)'} />
  })

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          noIcon
          onChangeText={(text) => this.setState({text})}
          value={'Buscar.. '}
          lightTheme={ true } />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
            {
              this.props.todos ?
              this.props.todos.map((element, index) => (
                  <SimpleAd
                    title={ element.getIn(['todo', 'title']) }
                    description={ element.getIn(['todo', 'description']) }
                    place={ element.getIn(['todo', 'place']) }
                    amount={ element.getIn(['todo', 'amount']) }
                    timer={ element.getIn(['todo', 'timer']) }
                    key={ element.get('id') }
                  />
              ))
              : <Card title={ 'No se cuenta con tareas disponibles.' } titleStyle={ styles.title } />   
            }
        </ScrollView>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('PublishAdNavigator')} underlayColor='rgba(0,0,0,0)'>
          <View style={styles.iconView}>
            <Ionicons name="ios-add-circle" size={30} color="rgb(0,173,239)" />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.get("todos")
  }
}

const _TodoScreen = connect(
  mapStateToProps,
  null
)(TodoScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  iconView: {
    alignSelf: 'flex-end',
    margin: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
  },
  centertext: {
    fontSize: 15,
    textAlign: 'center',
  },
  divider: { 
    height: 10,
    backgroundColor: 'white',
  }
});

export default _TodoScreen