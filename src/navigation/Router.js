import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DestinationSearch from '../screens/DestinationSearch';
import HomeTabNavigator from './HomeTabNavigator';
import SearchResultsScreen from '../screens/SearchResults';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name={'Home'} 
                component={HomeTabNavigator}  
                options={{
                    headerShown: false
                }}
                />

                <Stack.Screen 
                name={'Destination Search'} 
                component={DestinationSearch}  
                options={{
                    title: 'Search your destination'
                }}
                />
                <Stack.Screen 
                name={'Hotel Results'} 
                component={SearchResultsScreen}  
                options={{
                    title: 'Find your place to stay'
                }}
                />
                <Stack.Screen 
                name={'Post'} 
                component={PostScreen}  
                options={{
                    title: 'Accommadation'
                }}
                />
            </Stack.Navigator>           
        </NavigationContainer>
    );
} 