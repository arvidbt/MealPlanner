import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('screen').width;

const Header = (props) => {
	return <View style={styles.container}>
		<Text style={styles.labelStyle}>{props.label}</Text>
	</View>
}

const styles = StyleSheet.create({
	container: {
		width:windowWidth, // TODO: Make not hardcoded.
		height:90,
		backgroundColor: '#a29bfe',
		justifyContent: 'flex-end',
		paddingBottom: 20,
		alignItems: 'center',
	},

	labelStyle: {
		fontSize: 24,
		fontWeight: 'bold',
	}
});

export default Header;