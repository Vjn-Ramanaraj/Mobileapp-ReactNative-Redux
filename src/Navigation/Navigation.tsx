import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductForm1 from '../Screens/ProductForm1';
import ProductForm2 from '../Screens/ProductForm2';
import ProductList from '../Screens/ProductList';
import ProductView from '../Screens/ProductView'; 
import Header from '../Components/Header';
import { Products, Feature } from '../Model/model';

export type RootStackParamList = {
  About: undefined;
  AdditionalDetails: {
    benefits: string[];
    attributes: Feature[];
  };
  ProductView: { product: Products };
  ProductList: { productData: Products[] };
  DigitalProducts: { productData: Products[] };
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          header: () => <Header title={route.name} />,
        })}
      >
   
        <Stack.Screen name="About" component={ProductForm1} />
        <Stack.Screen name="AdditionalDetails" component={ProductForm2} />
        <Stack.Screen name="DigitalProducts" component={ProductList} />
        <Stack.Screen name="ProductView" component={ProductView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
