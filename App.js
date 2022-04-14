import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,  } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home';

export default function App() {
  return (
    <>
    <StatusBar style="auto"/>
    <SafeAreaView>
      
      <HomeScreen/>
     
    </SafeAreaView>
    </>
  );
}
