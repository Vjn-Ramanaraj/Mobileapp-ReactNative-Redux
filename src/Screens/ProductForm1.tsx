import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/Navigation';
import { Feature } from '../Model/model';

type ProductForm1NavigationProp = StackNavigationProp<RootStackParamList, 'AdditionalDetails'>;

const ProductForm1: React.FC = () => {
  
  const navigation = useNavigation<ProductForm1NavigationProp>();

  const [benefits, setBenefits] = useState<string[]>(['']);
  const [features, setFeatures] = useState<Feature[]>([{ attribute: '', value: '' }]);

  const addBenefit = () => {
    setBenefits([...benefits, '']);
  };

  const removeBenefit = (index: number) => {
    const updatedBenefits = benefits.filter((_, i) => i !== index);
    setBenefits(updatedBenefits);
  };

  const updateBenefit = (value: string, index: number) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index] = value;
    setBenefits(updatedBenefits);
  };

  const addFeature = () => {
    setFeatures([...features, { attribute: '', value: '' }]);
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
  };

  const updateFeature = (index: number, field: 'attribute' | 'value', value: string) => {
    const updatedFeatures = [...features];
    updatedFeatures[index][field] = value;
    setFeatures(updatedFeatures);
  };

  const handleNext = () => {
    // Pass benefits and features to the next screen
    navigation.navigate('AdditionalDetails', { benefits, attributes: features });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Benefits</Text>
      {benefits.map((benefit, index) => (
        <View key={index} style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Benefit"
            value={benefit}
            onChangeText={(text) => updateBenefit(text, index)}
          />
          <TouchableOpacity onPress={() => removeBenefit(index)} style={styles.deleteButton}>
            <Icon name="trash" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity onPress={addBenefit} style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Additional Details</Text>
      {features.map((feature, index) => (
        <View key={index} style={styles.attributeContainer}>
          <TextInput
            style={styles.attributeInput}
            placeholder="Attribute"
            value={feature.attribute}
            onChangeText={(text) => updateFeature(index, 'attribute', text)}
          />
          <TextInput
            style={styles.valueInput}
            placeholder="Value"
            value={feature.value}
            onChangeText={(text) => updateFeature(index, 'value', text)}
          />
          <TouchableOpacity onPress={() => removeFeature(index)} style={styles.deleteButton}>
            <Icon name="trash" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity onPress={addFeature} style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Category" />
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#F8F8F8',
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'transparent',
    paddingVertical: 5,
  },
  addButtonText: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  attributeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  attributeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#F8F8F8',
    marginRight: 10,
  },
  valueInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#F8F8F8',
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductForm1;
