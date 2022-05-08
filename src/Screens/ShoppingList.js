import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function ShoppingList({navigation}) {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>
				onPress={() => navigation.navigate('Home')}
				ShoppingList screen</Text>
		</View>
	);
}