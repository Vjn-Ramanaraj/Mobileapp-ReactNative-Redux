import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Products } from '../Model/model';

const ProductView: React.FC<{ route: { params: { product: Products } } }> = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.mainImage[0] }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>

      <Text style={styles.sectionTitle}>Description:</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      <Text style={styles.sectionTitle}>Features:</Text>
      <View style={styles.featuresContainer}>
        {product.features.map((feature, index) => (
          <Text key={index} style={styles.feature}>{`${feature.attribute}: ${feature.value}`}</Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Benefits:</Text>
      <View style={styles.benefitsContainer}>
        {product.benefits.map((benefit, index) => (
          <Text key={index} style={styles.benefit}>{benefit}</Text>
        ))}
      </View>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#1A202C',
    marginBottom: 16,
  },
  descriptionContainer: {
    backgroundColor: '#f0f0f0', // Light grey background for description
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  featuresContainer: {
    backgroundColor: '#f0f0f0', // Light grey background for features
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  benefitsContainer: {
    backgroundColor: '#f0f0f0', // Light grey background for benefits
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  feature: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  benefit: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  buyButton: {
    backgroundColor: '#3182CE', // Blue background for button
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductView;
