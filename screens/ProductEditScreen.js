import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";
import { fetchProductById } from '../utils/api';

export default function ProductEditScreen(props) {

  const { id } = props.route.params;

  const [product, setProduct] = useState({
    "id": 0,
    "name": "",
    "price": 0,
    "stock": 0,
    "description": "",
    "categoryId": 0
  });
  const [offline, setOffline] = useState(false);
  const [error, setError] = useState(null);

  // #region Navigation
  function showShopView() {
    props.navigation.navigate('ShopView');
  }
  // #endregion

  async function handleSubmit() {
    try {
      if (id === -1) {
        await addPerson(person);
      } else {
        await updatePerson(id, person);
      }
      props.navigation.goBack();
    } catch (err) {
      console.error(err);
      setError("Failed to save data.");
    }
  };

  async function handleSubmitTest() {
    try {
      if (id === -1) {
        await addProduct({
          name: "New Person",
          phone: "1234567890",
          departmentId: 1,
          street: "123 Main St",
          city: "Anytown",
          state: "ST",
          zip: "12345",
          country: "US",
        });
      } else {
        await updateProduct(id, { ...person, name: person.name + " Updated" });
      }
      props.navigation.goBack();
    } catch (err) {
      console.error(err);
      setError("Failed to save data.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id !== -1) {
          const data = await fetchProductById(id);
          setProduct(data);
          console.log(data);
        } else {
          console.log("New Product");
        }
      } catch (err) {
        console.error(err);
        setOffline(true);
        setError("Unable to fetch data, offline mode");
      }
    };

    fetchData();
  }, []);

  return (
    <Surface style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text variant='displaySmall'>Product Edit Screen</Text>
      <Text>{id}</Text>
      <Text>{product?.name}</Text>
      <Text>{product?.price}</Text>
      <Text>{product?.stock}</Text>
      <Text>{product?.description}</Text>

      <Button mode="contained" icon="arrow-left" onPress={() => showShopView()}>
        Go Back
      </Button>

      <Button mode="contained" icon="content-save" onPress={() => handleDeleteTest()}>
        Save Product Record
      </Button>
    </Surface>
  )
}