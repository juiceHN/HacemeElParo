import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {
	Card,
	Button,
	Divider
} from 'react-native-elements'

const Pack = ({ title, description }) => (
	<View>
		<Card title={ title } >
			<Text style={ styles.centertext } >
				{ description }
			</Text>
			<Divider style={ styles.divider } />
			<Button
				title='Comprar'
				icon={{ name: 'add-shopping-cart' }} />
		</Card>
	</View>
)

const styles = StyleSheet.create({
  centertext: {
    fontSize: 15,
    textAlign: 'center',
  },
  divider: { 
    height: 10,
    backgroundColor: 'white',
  }
})

export default Pack

