import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, Button, TouchableOpacity } from 'react-native'
import pokemon from './pokemon.js'
import Bulba from './images/002.png'
import { defaultProps } from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const ListScreen = () => {
  
  
  // const img_url = './images/'
  // const img = '003.png'

  return (
    <View>
      <Button
      onPress={() => defaultProps.navigation.navigate('Component')}
      title="Order Alphabet"/>
    <FlatList
      keyExtractor={pokemon => pokemon.name}
      data={pokemon}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}><Image source={item.img_name} 
        style={{width: 100, height: 100}}/>{item.name}</Text>
        
      }}
      
    />
    
    </View>

  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    marginVertical: 20
  }
})

export default ListScreen;

