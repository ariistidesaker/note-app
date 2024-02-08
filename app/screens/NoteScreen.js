import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchBar from '../components/SearchBar';
import RoundIconBtn from '../components/RoundIconBtn';
import NoteInpuModal from '../components/NoteInpuModal';

const NoteScreen = ({user, containerStyle}) => {
    const inset = useSafeAreaInsets();
    const [greet, setGreet] = useState('Night');
    const [modalVisible, setModalVisible] = useState(false)

    const findGreet = () => {
        const hours = new Date().getHours();

        if(hours === 0 || hours < 12 ) return setGreet('Morning');
        if(hours === 1 || hours < 17 ) return setGreet('Afternoon');
        setGreet('Evening');
    }


    useEffect(() => {
      findGreet();
    }, [])
    
  return (
    <>
        <View style={[styles.container, {paddingTop: inset.top}]}>
            <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
            <SearchBar containerStyle={{marginVertical: 15}}/>
            <View style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
                <Text style={styles.emptyHeader}>Add Notes</Text>
                <RoundIconBtn 
                    onPress={() => setModalVisible(true)}
                    antDesignName='plus' 
                    stylecontainer={styles.addBtn}
                />
            </View>
        </View>
        <NoteInpuModal visible={modalVisible} onClose={() => setModalVisible(false)}/>
    </>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    header: {
        fontSize: 25,
        fontWeight: "bold"
    },
    emptyHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        opacity: 0.2
    },
    emptyHeaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1
    },
    addBtn: {
        position: 'absolute',
        right: 15,
        bottom: 50
    }
})