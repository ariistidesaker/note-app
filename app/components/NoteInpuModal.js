import { Modal, StyleSheet, Text, View, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import colors from '../misc/colors';
import RoundIconBtn from './RoundIconBtn';

const NoteInpuModal = ({visible, onClose, onSubmit}) => {
    const insets = useSafeAreaInsets();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const handleCloseModal = () => {
        Keyboard.dismiss();
    }

    const handleOnChangeText = (text, valueFor) => {
        if(valueFor === 'title') setTitle(text);
        if(valueFor === 'desc') setDesc(text);
    }

    const handleSubmit = () => {
        if(!title.trim() && !desc.trim()) return onClose();
        onSubmit(title, desc);
        setTitle('');
        setDesc('');
        onClose();
    }

    const closeModal = () => {
        setTitle('');
        setDesc('');
        onClose();
    }
  return (
    <>
        <StatusBar hidden/>
        <Modal 
            visible={visible} 
            animationType='fade'
        >
            <View style={[styles.container, {paddingTop: insets.top}]}>
                <TextInput 
                    placeholder='Title' 
                    value={title}
                    onChangeText={(text) => handleOnChangeText(text, 'title')}
                    style={[styles.input, styles.title]}
                />
                <TextInput 
                    placeholder='Note' 
                    value={desc}
                    onChangeText={(text) => handleOnChangeText(text, 'desc')}
                    multiline
                    style={[styles.input, styles.desc]}
                />
                <View style={styles.btnContainer}>
                    <RoundIconBtn antDesignName='check' size={15} onPress={handleSubmit}/>
                    {
                        title.trim() || desc.trim() ?
                        <RoundIconBtn antDesignName='close' size={15} onPress={closeModal}/> : null
                    }
                </View>
            </View>
            <TouchableWithoutFeedback onPress={handleCloseModal}>
                <View style={[StyleSheet.absoluteFillObject, styles.modalBG]}></View>
            </TouchableWithoutFeedback>
        </Modal>
    </>
    
  )
}

export default NoteInpuModal;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        paddingTop: 15
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: colors.PRIMARY
    },
    title: {
        height: 40,
        marginBottom: 15,
        fontWeight: 'bold'
    },
    desc: {
        height: 100
    },
    modalBG: {
        flex: 1,
        zIndex: -1
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 15,
        gap: 20
    }
})