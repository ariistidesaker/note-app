import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const RoundIconBtn = ({antDesignName, size, color, style, stylecontainer, onPress}) => {
  return (
    <TouchableOpacity 
    style={[styles.iconContainer, {...stylecontainer}]}
    onPress={onPress}
    >
      <AntDesign 
          name={antDesignName} 
          size={size || 24} 
          color={color || colors.LIGHT} 
          style={[styles.icon, {...style}]}
      />
    </TouchableOpacity>
  ) 
}

export default RoundIconBtn

const styles = StyleSheet.create({
  icon: {
    // backgroundColor: colors.PRIMARY,
    // padding: 15,
    // borderRadius: 50,
    elevation: 5
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.PRIMARY,
    padding: 15
  }
})