import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Card, Button, Icon, Divider } from 'react-native-elements'; // 0.18.2
import HelpersList from "./HelpersList";

import "@expo/vector-icons"; // 6.2.0

class MyAds extends Component {
	render() {
		return (
			<View>
			<Card
			title={this.props.tituloDetalle}
			titleStyle={styles.titStyle}
			>
			<Text 
			style={styles.descriptionStyle}
			className="descripcionAd"
			>
			{this.props.contenidoDetalle}
			</Text>
			<Divider 
			style={{ height: 10, backgroundColor: 'white' }}
			/>
			
			<Divider style={{ height: 1 }} />

				<Text
				style={styles.subTitle}
				>
				Location
				</Text>

				<Text
				style={styles.locStyle}
				>
				{this.props.locacionDetalle}
				</Text>


				<Divider 
				style={{ height: 10, backgroundColor: 'white' }}
				/>

				<Divider style={{ height: 1 }} />

				<Text
				style={styles.subTitle}
				>
				Payment
				</Text>

				<Text style={styles.locStyle}>
				Q 
				{this.props.pagoDetalle}
				</Text>

				<Divider 
				style={{ height: 10, backgroundColor: 'white' }}
				/>


				<Icon
					name='query-builder'
				/>

				
				<Text 
				className="tiempoAd"
				style={styles.timerStyle}
				>
				{this.props.tiempoDetalle} min remaining 
				</Text>
				<Divider 
				style={{ height: 10, backgroundColor: 'white' }}
				/>
				<Button
				icon={{ name: 'create' }}
				backgroundColor='limegreen'
				fontFamily='Lato'
				buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
				title='Editar' 
				/>
				<Divider
				style={{height:10, backgroundColor: 'white'}}
				/>
				<Button
				icon={{ name: 'delete' }}
				backgroundColor='red'
				fontFamily='Lato'
				buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
				title='Borrar' 
				/>

			</Card>
			<HelpersList A={this.props.B} />


			</View>

			);
	}
}

const styles = StyleSheet.create({
	titStyle: {
		fontSize: 20,
		fontWeight: 'bold',
	},

	locStyle: {
		fontSize: 15,
	},

	subTitle: {
		fontSize: 15,
		fontWeight: 'bold',
	},

	descriptionStyle: {
		marginBottom: 10,
		fontSize: 20,
	},

	timerStyle: {
		textAlign: 'center',
	},
});

export default MyAds;