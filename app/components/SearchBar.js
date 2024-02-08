import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../misc/colors';

const SearchBar = ({containerStyle}) => {
  return (
    <View style={[{...containerStyle}]}>
      <TextInput style={styles.searchBar} placeholder='Search here...'/>
    </View>
  )
}

export default SearchBar;

const styles = StyleSheet.create({
    searchBar: {
        borderWidth: 0.5,
        borderColor: colors.PRIMARY,
        height: 40,
        borderRadius: 40,
        paddingHorizontal: 10,
        fontSize: 20
    }
})