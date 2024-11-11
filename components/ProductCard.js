import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function ProductCard(props) {
  return (
    <View>
        <Text>e</Text>
        <Text>{props.name}</Text>
        <Text>{props.categoryName}</Text>
        <Text>{props.price}</Text>
        <Text>{props.stock} left in stock</Text>
        <Text>{props.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});