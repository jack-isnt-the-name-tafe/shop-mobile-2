import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Icon } from 'react-native-paper'

export default function ProductCard(props) {
  return (
    <View style={styles.outerContainer}>
        <View style={styles.infoContainer}>
          <Text>{props.name}</Text>
          <Text>{props.categoryName}</Text>
          <Text>${props.price}</Text>
          <Text>{props.stock} left in stock</Text>
          <Text>{props.description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          </Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'white',
    width: 250,
    padding: 5,
    marginBottom: 10,
  },
  infoContainer: {
    
  },
  buttonContainer: {
    
  },
});