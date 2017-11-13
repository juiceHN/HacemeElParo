import React from 'react'
import '@expo/vector-icons'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import {
	Card,
	Button,
	Icon,
	Divider
} from 'react-native-elements'


const SimpleAd = ({ title, description, place, amount, timer}) => (
	<View>
		<Card
			title={ title }
			titleStyle={ styles.title } > 	
			<Text 
				style={ styles.centertext } >
				{ description }
			</Text>
			
			<Divider style={ styles.divider } />
			<Text style={ styles.subtitle } >
				Lugar del Favor:
			</Text>
			<Text style={ styles.text } >
				{ place }
			</Text>
			
			<Divider style={ styles.divider } />
			<Text style={ styles.subtitle } > 
				Pago a Realizar:
			</Text>
			<Text style={ styles.text } >
				Q { amount }
			</Text>
			
			<Divider style={ styles.divider } />
			<Icon name='query-builder' />
			<Text style={ styles.centertext }>
				{ timer } minutos restantes...
			</Text>
			
			<Divider style={styles.divider} />
			<Button
				icon={{ name: 'info' }}
				title='Más Información' />
				
		</Card>
	</View>
)

const styles = StyleSheet.create({
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
})

export default SimpleAd;
