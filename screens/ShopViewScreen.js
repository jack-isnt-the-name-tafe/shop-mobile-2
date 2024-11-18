// import React from 'react'
// import { View, Text, Button, StyleSheet } from 'react-native'
// import { fetchProducts } from '../utils/api';
// import { useEffect, useState } from 'react';
// import ProductCard from '../components/ProductCard';

// export default function ShopViewScreen(props) {

//     const [products, setProducts] = useState([]);

//     useEffect(() => {

//         const fetchData = async () => {
//             try {
//                 const data = await fetchProducts();
//                 setProducts(data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchData();

//     }, []);

//   return (
//     <View style={styles.container}>
//       {
//         products.map(
//             (product) => {
//                 return(
//                     <ProductCard key={product.id} 
//                     name={product.name} 
//                     categoryName={product.Category.name} 
//                     price={product.price}
//                     stock={product.stock}
//                     description={product.description}
//                     />
//                 );
//             }
//         )
//       }
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
// });

import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";
import { fetchProducts } from '../utils/api';
import { deleteProduct } from '../utils/api';

export default function ShopViewScreen(props) {

  const isFocused = useIsFocused();

  const [products, setProducts] = useState([]);
  const [offline, setOffline] = useState(false);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductName, setSelectedProductName] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setOffline(true);
      setError("Unable to fetch data, offline mode");
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  // #region Navigation
    function showViewProduct(id) {
      props.navigation.navigate("ProductView", {id: id});
    }
    function showEditProduct(id) {
      props.navigation.navigate("ProductEdit", {id: id});
    }
  // #endregion

    async function handleDeleteTest() {
      const lastProduct = products[products.length - 1].id;
      try {
        const success = await deleteProduct(lastProduct);
        if (success) {
          fetchData();
        } else {
          setError("Failed to delete. Please try again.");
        }
      } catch (err) {
        console.error("Error deleting:", err);
        setError("Failed to delete. Check your connection.");
      }
    }

  return (
    <Surface style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text variant='displaySmall'>Shop View Screen</Text>

      {products.map((product) => (
        <Text key={product.id}>{product.name}</Text>
      ))}

      <Button mode="contained" icon="tag" onPress={() => showViewProduct(2)}>
        View Product 2
      </Button>

      <Button mode="contained" icon="pencil" onPress={() => showEditProduct(2)}>
        Edit Product 2
      </Button>

      <Button mode="contained" icon="plus" onPress={() => showEditProduct(-1)}>
        Add Product
      </Button>

      <Button mode="contained" icon="delete" onPress={() => handleDeleteTest(9)}>
        Delete Product
      </Button>

    </Surface>
  )
}