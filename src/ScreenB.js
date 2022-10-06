import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import axios from 'axios';


export default function ScreenB ({navigation, route}) {
    console.log("Params : ", route.params)
   const {myName,clicked} = route.params;
    console.log(clicked)
   const onBack = ()=>{
    navigation.navigate("Screen_A");
   }

   const [colorValue , setColorValue] = useState('not set')

   const apiCall = async()=>{
    let response = await axios.get("https://reqres.in/api/products/3");
    console.log(response);
    setColorValue(response.data.data.color);
   }

  return (
   <View style={styles.body}>
    <Text style={styles.text}>Screen B</Text>
    <Text style={styles.text}>Welcome  {myName}</Text>
    <Text style={styles.text}>In screen A Button was clicked {clicked} times</Text>
    <Button title='GO to Screen A' onPress={onBack}></Button>
    <Text style={styles.text}>Calling API</Text>
    <Button title='Call API' onPress={apiCall}></Button>
    <Text style={styles.text}>API called and value is {colorValue}</Text>
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
