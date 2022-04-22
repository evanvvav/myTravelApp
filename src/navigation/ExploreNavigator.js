import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Router() {
    return (
         <Stack.Navigator>
            <Stack.Screen 
                name={'Welcome'} 
                component={HomeScreen}  
                options={{
                    headerShown: false
                }}
                />

                <Stack.Screen 
                name={'SearchResults'} 
                component={SearchResultsScreen}  
                options={{
                    title: 'Search your destination'
                }}
                />
        </Stack.Navigator>
    );
} 