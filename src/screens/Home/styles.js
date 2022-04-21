import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
 image: {
     width: '100%', 
     height: 500, 
     resizeMode: 'cover',
     justifyContent: 'center',
 }, 
 title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'black', 
    width: '70%',
    marginLeft: 25, 
 },
 button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center' 
 },
 buttonText: {
    fontSize: 16,
    fontWeight: 'bold',

 },
  searchButton: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 30,
    height: 50,
    borderRadius: 30,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 35,
    zIndex: 100,
    elevation: (Platform.OS === 'android') ? 2 : 0,
 },
 searchButtonText: {
    fontSize: 16,
    //fontWeight: 'bold',

 },
 

});

export default styles;