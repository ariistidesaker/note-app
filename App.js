import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native';
import Intro from './app/screens/Intro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import NoteScreen from './app/screens/NoteScreen';

export default function App() {
  const [user, setUser] = useState('');
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    if(result !== null) {
      setUser(JSON.parse(result));
    }
    // console.log(result);
  }
  useEffect(() => {
    findUser();
    // AsyncStorage.clear();
  }, [])
  
  return (
    <SafeAreaProvider>
      { 
        !user.name ? <Intro onFinish={findUser}/> : <NoteScreen user={user}/>
      }
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
