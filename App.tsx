import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/Store';
import Navigation from './src/Navigation/Navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.screen}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <Navigation />
      </View>
    </Provider>
  );
};

export default gestureHandlerRootHOC(App);

const styles = StyleSheet.create({
  screen: {
    flex: 1,  // Ensures the view takes up the full screen
    backgroundColor: '#FFFFFF', // Set background color if needed
  },
});
