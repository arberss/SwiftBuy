import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductList from './components/ProductList';

const Home = () => {
  return (
    <>
      <SafeAreaView edges={['top']}>
        <Header>
          <Header.Title title='SwiftBuy' />
        </Header>
      </SafeAreaView>
      <View style={styles.container}>
        <Input placeholder='Search' onChangeText={() => {}} value={''} />
        <ProductList />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
});
