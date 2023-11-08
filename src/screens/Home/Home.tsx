import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import ProductCard from '@/components/Cards/ProductCard';
import { FlashList } from '@shopify/flash-list';
import { PRODUCTS } from '@/mockData/products';

const HomeScreen = () => {
  return (
    <>
      <Header>
        <Header.Title title='SwiftBuy' />
      </Header>
      <View style={styles.container}>
        <Input placeholder='Search' onChangeText={() => {}} value={''} />
        <View style={{ height: '100%', flexGrow: 1, flexDirection: 'row' }}>
          <FlashList
            data={PRODUCTS}
            renderItem={({ item, index }) => {
              return (
                <ProductCard
                  title={item?.title}
                  price={item?.price}
                  customStyle={{ marginTop: index < 1 ? 0 : 22 }}
                  src={item.src}
                />
              );
            }}
            estimatedItemSize={10}
            contentContainerStyle={{ paddingBottom: 320 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
});
