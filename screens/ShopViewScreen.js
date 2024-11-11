import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { fetchProducts } from '../utils/api';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function ShopViewScreen(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);

  return (
    <View style={styles.container}>
      {
        products.map(
            (product) => {
                return(
                    <ProductCard key={product.id} 
                    name={product.name} 
                    categoryName={product.Category.name} 
                    price={product.price}
                    stock={product.stock}
                    description={product.description}
                    />
                );
            }
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});