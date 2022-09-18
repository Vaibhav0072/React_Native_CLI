import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

export default function ScreenA ({navigation}) {
  const [name, setName] = useState('Vaibhav')
  const [session, setSession] = useState({ number: 6, title: 'state' })
  const [current, setCurrent] = useState(true)
  const [counter, setCounter] = useState(0);

  const onClickHandler = () => {
    setName('Learning React Native')
    setSession({ number: 7, title: 'Style' })
    setCurrent(false)
  }

  const onAddHandler = () => {
    setCounter(counter+1);
  }

  const onResetandler = () => {
    setCounter(0);
  }

  const onPageChange =  () =>{
    console.log("clicked ", counter);
    navigation.navigate("Screen_B",{myName : "Vaibhav",clicked : counter.toString()})
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>This is session number {session.number} and about {session.title}</Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button title='Update State' onPress={onClickHandler}></Button>

      <Text>{counter*5}</Text>
      <Button title='Add' onPress={onAddHandler}></Button>
      <Text>You have clicked {counter} times</Text>

      <Button title='Reset Counter' onPress={onResetandler}></Button>


      <Button title='Go To Screen B' onPress={onPageChange}></Button>
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
