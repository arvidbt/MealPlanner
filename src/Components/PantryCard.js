import react from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

const Card = (props) => {
	return (
		<View style={styles.cardContainer}>
			<Text style={styles.titleStyle}>{props.label}</Text>
		</View>
	);
};

const deviceWidth = Dimensions.get('screen').width - 60
const styles = StyleSheet.create({
	cardContainer: {

		width: deviceWidth,
		height: 100,
		backgroundColor: '#a29bfe',
		borderRadius: 20,
		shadowColor: '#0000',
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 0.75,
		elevation: 10,
		shadowRadius: 5,
		margin: 10

	},

	titleStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10,
		marginStart: 20

	}

})


export default Card;