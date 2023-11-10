import { StyleSheet, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductList from './components/ProductList';
import { PRODUCTS } from '@/mockData/products';

const Home = () => {
  const [search, setSearch] = useState('');

  const filteredData = useMemo(() => {
    return PRODUCTS.filter((item) => item.title.includes(search));
  }, [search]);

  return (
    <>
      <SafeAreaView edges={['top']}>
        <Header>
          <Header.Title title='SwiftBuy' />
        </Header>
      </SafeAreaView>
      <View style={styles.container}>
        <Input
          placeholder='Search'
          onChangeText={(value) => setSearch(value)}
          value={search}
        />
        <ProductList data={filteredData} />
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
