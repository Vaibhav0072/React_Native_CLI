import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';


export default function ScreenB ({navigation, route}) {
    console.log("Params : ", route.params)
   const {myName,clicked} = route.params;
    console.log(clicked)
   const onBack = ()=>{
    navigation.navigate("Screen_A");
   }
  return (
   <View style={styles.body}>
    <Text style={styles.text}>Screen B</Text>
    <Text style={styles.text}>Welcome  {myName}</Text>
    <Text style={styles.text}>In screen A Button was clicked {clicked} times</Text>
    <Button title='GO to Screen A' onPress={onBack}></Button>
   </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ab0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});
