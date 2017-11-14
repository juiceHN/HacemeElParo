import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { Card, Button, Divider, FormLabel, FormInput, Header } from 'react-native-elements'; // 0.18.2
import { Ionicons } from '@expo/vector-icons' // 6.2.0
import { connect } from 'react-redux' // 5.0.6
import { add_todo } from '../redux/todos'
import "@expo/vector-icons"; // 6.2.0

import "redux"; // 3.7.2

class ManejoPago extends Component{
  constructor(props){
    super(props);
    this.state = {
      cardNumber:'',
      day:'',
      month:'',
      cvc:'',
      postal:'',
    }
  }
  
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Informacion de pagos',
    header: <Header 
              leftComponent={
                <TouchableHighlight onPress={()=>navigation.goBack(null)} underlayColor='rgba(0,0,0,0)'>
                  <View>
                    <Ionicons name="ios-arrow-back" size={30} color="white" />
                  </View>
                </TouchableHighlight>
              }
              centerComponent={{text:'Informacion de pagos', style: styles.header}}
              backgroundColor={'rgb(0,173,239)'}
            />
  })
  
  render(){
    return(
        <View>
          <Card
          title="Pago"
          titleStyle={styles.title}
          >
          <FormLabel labelStyle={ styles.subtitle } >Numero de tarjeta:</FormLabel>
          <FormInput 
          onChangeText={(cardNumber)=>this.setState({ cardNumber })}
          keyboardType='numeric'
          />
          <FormLabel>Dia de expiracion:</FormLabel>
          <FormInput 
          onChangeText={(day)=>this.setState({day })}
          keyboardType='numeric'
          />
          <FormLabel>Mes de expiracion:</FormLabel>
          <FormInput
          onChangeText={(month)=>this.setState({ month })}
          keyboardType='numeric'
          />
          <FormLabel>CVC:</FormLabel>
          <FormInput 
          onChangeText={(cvc)=>this.setState({cvc })}
          keyboardType='numeric'
          />
          <FormLabel>Codigo Postal:</FormLabel>
          <FormInput 
          onChangeText={(postal)=>this.setState({postal })}
          keyboardType='numeric'
          />
          <Divider />
          <Button
          backgroundColor="limegreen"
          title="Realizar Pago"
          icon={{ name: 'payment' }}
          onPress={()=>{
            this.props.navigation.goBack(null)
          }}
          />
          </Card>
        </View>
      );
  }
}

const mapStateToProps = state => {
  return {
    nID: state.get('todos').size
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPlusClick: (id, todo) => {
      dispatch(add_todo(id, todo))
    }
  }
}

const _ManejoPago = connect(
  mapStateToProps,
  mapDispatchToProps
)(ManejoPago)

const styles = StyleSheet.create({
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  
})

export default _ManejoPago;
