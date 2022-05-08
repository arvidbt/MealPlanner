import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Card from '../Components/RecipeCard';



export default function Details({navigation}) {
	return (
		<View style={styles.container}>
			<View style={styles.tasksWrapper}>
				<View style={styles.items}>
					<Card label="RECIPE_ITEM"/>
					<Card label="RECIPE_ITEM"/>
					<Card label="RECIPE_ITEM"/>
					<Card label="RECIPE_ITEM"/>
				{}
				</View>
			</View>
		</View>
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
