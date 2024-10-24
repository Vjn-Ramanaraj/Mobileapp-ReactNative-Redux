import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../Model/model';

// Sample data according to the Products model
const sampleProducts: Products[] = [
  {
    id: '1',
    name: 'Product 1',
    description: 'Description for Product 1',
    price: '10.00',
    mainImage: ['https://via.placeholder.com/150'], // Placeholder image URL
    features: [
      { attribute: 'Feature 1', value: 'Value 1' },
      { attribute: 'Feature 2', value: 'Value 2' },
    ],
    benefits: ['Benefit 1', 'Benefit 2'],
    category: 'Category 1',
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'Description for Product 2',
    price: '20.00',
    mainImage: ['https://via.placeholder.com/150'],
    features: [
      { attribute: 'Feature A', value: 'Value A' },
      { attribute: 'Feature B', value: 'Value B' },
    ],
    benefits: ['Benefit A', 'Benefit B'],
    category: 'Category 2',
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'Description for Product 3',
    price: '30.00',
    mainImage: ['https://via.placeholder.com/150'],
    features: [
      { attribute: 'Feature X', value: 'Value X' },
      { attribute: 'Feature Y', value: 'Value Y' },
    ],
    benefits: ['Benefit X', 'Benefit Y'],
    category: 'Category 3',
  },
];

interface ProductState {
  items: Products[];
}

const initialState: ProductState = {
  items: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Products>) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
    clearProducts: (state) => {
      state.items = [];
    },
    setSampleProducts: (state) => {
      state.items = sampleProducts; // Set the items to the sample products
    },
  },
});

export const { addProduct, removeProduct, clearProducts, setSampleProducts } = productSlice.actions;
export default productSlice.reducer;
