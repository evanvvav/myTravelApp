import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults';
import ExploreNavigator from './ExploreNavigator';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import PostScreen from '../screens/PostScreen';


const Tab = createBottomTabNavigator();

export default function HomeTabNavigator() {
    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: '#C996CC',
        }}>
            <Tab.Screen 
                name={'Explore'}
                component={ExploreNavigator}
                //component={PostScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name='search' size={25} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name={'Close to you'} 
                component={SearchResultsScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name={'location-pin'} size={25} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name={'Favourite'} 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name='heart-o' size={25} color={color} />
                    ),
                    headerShown: false
                }}
            />
            
        </Tab.Navigator>
    );
} 