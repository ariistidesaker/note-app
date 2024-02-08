import { StyleSheet, Text, View, TextInput, Dimensions, StatusBar } from 'react-native'
import React, { useState } from 'react'
import colors from '../misc/colors';
import RoundIconBtn from '../components/RoundIconBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Intro = ({onFinish}) => {
    const [name, setName] = useState("");

    const handleOnChangeText = text => {
        setName(text);
    }
    const handleSubmit = async () => {
        const user = { name: name };
        await AsyncStorage.setItem('user', JSON.stringify(user));
        if(onFinish) onFinish();
    }
  return (
    <>
        <StatusBar hidden/>
        <View style={styles.container}>
            <Text style={styles.introInput}>Enter your name to continue</Text>
            <TextInput 
                value={name}
                onChangeText={handleOnChangeText}
                placeholder='Enter Name' 
                style={styles.textInput}
            />
            {name.trim().length >= 3 ? <RoundIconBtn antDesignName="arrowright" onPress={handleSubmit}/> : null}
        </View>
    </>
  )
}

export default Intro;

const width = Dimensions.get("window").width - 50;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        borderWidth: 5,
        borderColor: colors.PRIMARY,
        color: colors.PRIMARY,
        width,
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15,
        fontSize: 25
    },
    introInput: {
        alignSelf: "flex-start",
        paddingLeft: 25,
        marginBottom: 5,
        opacity: 0.5
    }
})