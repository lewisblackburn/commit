import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import Footer from './app/components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Footer />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
