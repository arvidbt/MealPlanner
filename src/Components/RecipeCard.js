import react from 'react'
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'

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
		backgroundColor: 'tomato',
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

	imageStyle: {
		height: 50,
		width: deviceWidth,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		opacity: 0.9,
	},

	titleStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		justifyContent: 'center',
		alignItems: 'center',
		marginStart: 20,
		marginTop: 10

	}

})


export default Card;