import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Screens/Home';
import RecipeScreen from './Screens/Recipe';
import PantryScreen from './Screens/Pantry';
import ShoppingList from './Screens/ShoppingList';

const homeName = "Home";
const recipesName = "Recipes";
const pantryName = "Pantry";
const shoppingListName = "Shopping List";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === recipesName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === pantryName) {
              iconName = focused ? 'file-tray-stacked' : 'file-tray-stacked-outline';
            }

            else if (rn === shoppingListName) {
              iconName = focused ? 'receipt' : 'receipt-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={recipesName} component={RecipeScreen} />
        <Tab.Screen name={pantryName} component={PantryScreen} />
        <Tab.Screen name={shoppingListName} component={ShoppingList} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;