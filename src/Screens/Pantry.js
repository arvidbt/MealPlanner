import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from '../Components/PantryCard';

export default function Settings({navigation}) {
	return (
		<ScrollView>
			<View style={styles.container}>
			<View style={styles.tasksWrapper}>
				<View style={styles.items}>
					<Card label="PANTRY_ITEM"/>
					<Card label="PANTRY_ITEM"/>
					<Card label="PANTRY_ITEM"/>
					<Card label="PANTRY_ITEM"/>
					<Card label="PANTRY_ITEM"/>
					<Card label="PANTRY_ITEM"/>
					<Card label="PANTRY_ITEM"/>
					<Card label="PANTRY_ITEM"/>
					<Card label="PANTRY_ITEM"/>
				{}
				</View>
			</View>
		</View>
	</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#E8EAED',
	},
	tasksWrapper: {
	  paddingTop: 20,
	  paddingHorizontal: 20, 
	},
	sectionTitle: {
	  fontSize: 24,
	  fontWeight: 'bold',
	  marginHorizontal: 10
	},
	items:        {}
  
  });