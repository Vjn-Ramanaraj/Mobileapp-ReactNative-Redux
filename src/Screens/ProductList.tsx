import React, { useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import { setSampleProducts } from '../Slices/ProductReducer';
import { Products } from '../Model/model';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.Products.items);
  const navigation = useNavigation(); // Initialize navigation

  useEffect(() => {
    dispatch(setSampleProducts());
  }, [dispatch]);

  const renderItem = ({ item }: { item: Products }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ProductView', { product: item })} // Navigate to ProductView with product data
    >
      <Image source={{ uri: item.mainImage[0] }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingVertical: 10,
  },
  item: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10, // Use marginBottom for vertical spacing
    elevation: 5, // Adds elevation for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemImage: {
    width: '100%', // Use full width for vertical layout
    height: 100, // Adjust the height as necessary
    borderRadius: 8,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
  },
  itemPrice: {
    fontSize: 16,
    color: '#1E90FF',
  },
});

export default ProductList;
