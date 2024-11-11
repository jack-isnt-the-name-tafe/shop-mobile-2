import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ShopViewScreen from '../screens/ShopViewScreen';
import ProductViewScreen from '../screens/ProductViewScreen';
import ProductEditScreen from '../screens/ProductEditScreen';

const Stack = createStackNavigator();

export default function ShopNavigator() {
  return (
    <Stack.Navigator initialRouteName='ShopView' screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='ShopView'
        component={ShopViewScreen}
        options={{ title: "View Shop" }}
      />
      <Stack.Screen
        name='ProductView'
        component={ProductViewScreen}
        options={{ title: "View Product" }}
      />
      <Stack.Screen
        name='ProductEdit'
        component={ProductEditScreen}
        options={{ title: "Edit Product" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});