import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../Navigation/Navigation';
import { Products } from '../Model/model';
import { RouteProp } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ProductForm2NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AdditionalDetails'>;

const ProductForm2: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'AdditionalDetails'>>();
  const navigation = useNavigation<ProductForm2NavigationProp>();
  const { benefits, attributes } = route.params;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('$0.00');
  const [photos, setPhotos] = useState<string[]>([]);

  const handleAddPhoto = async (index: number) => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });
    if (!result.didCancel && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      if (uri) {
        const updatedPhotos = [...photos];
        updatedPhotos[index] = uri; 
        setPhotos(updatedPhotos);
      } else {
        console.warn("Image URI is undefined");
      }
    }
  };

  const handlePriceChange = (value: string) => {
    const formattedValue = value.replace(/[^0-9.]/g, '');
    setPrice(formattedValue);
  };

  const handleNext = () => {
    const productData: Products = {
      id: Date.now().toString(),
      name,
      description,
      price,
      mainImage: photos,
      features: attributes,
      benefits,
      category: '',
    };
    navigation.navigate('ProductList', { productData: [productData] });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        maxLength={2000}
      />
      <Text style={styles.charLimit}>{2000 - description.length} characters remaining</Text>

      <Text style={styles.subTitle}>Cover photos (Upload up to 5 photos)</Text>
      <View style={styles.photoContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <TouchableOpacity key={index} style={styles.photoBox} onPress={() => handleAddPhoto(index)}>
            {photos[index] ? (
              <Image source={{ uri: photos[index] }} style={styles.photo} />
            ) : (
              <Icon name="add" size={32} color="#1E90FF" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subTitle}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="$0.00"
        value={price}
        keyboardType="numeric"
        onChangeText={handlePriceChange}
      />

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#F8F8F8',
    fontSize: 16,
    marginBottom: 10,
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  charLimit: {
    textAlign: 'right',
    fontSize: 12,
    color: '#999',
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginVertical: 10,
  },
  photoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  photoBox: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  nextButton: {
    backgroundColor: '#1E90FF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    elevation: 5, // Adds elevation for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductForm2;
