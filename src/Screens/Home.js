import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Home({navigation}) {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>
				onPress={() => alert('This is the "Home" screen.')}
				Home screen</Text>
		</View>
	);
}

