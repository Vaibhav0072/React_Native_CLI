import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import  ScreenB  from './ScreenB';
import  ScreenA  from './ScreenA';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  
  const Stack = createStackNavigator();
  
  return (
    
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          header: ()=>null
        }}
        >
          <Stack.Screen
            name="Screen_A"
            component={ScreenA}
          />

          <Stack.Screen
            name="Screen_B"
            component={ScreenB}
          />

        </Stack.Navigator>
      </NavigationContainer>

    // <Text>Hi</Text>
    
  
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

export default App;