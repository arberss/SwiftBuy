import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '@/components/Header/Header';
import ListCard from '@/components/Cards/ListCard';
import { FlashList } from '@shopify/flash-list';
import { PRODUCTS } from '@/mockData/products';
import SwipeableWrapper from '@/components/Swipeable/Swipeable';
import CheckoutCard from './components/CheckoutCard';

const Cart = () => {
  return (
    <>
      <Header>
        <Header.Title title='SwiftBuy' />
      </Header>
      <View style={styles.container}>
        <View style={{ height: '100%', flexGrow: 1, flexDirection: 'row' }}>
          <FlashList
            data={PRODUCTS}
            renderItem={({ item, index }) => {
              return (
                <View style={{ marginTop: index < 1 ? 0 : 16 }}>
                  <SwipeableWrapper onPress={() => {}}>
                    <ListCard item={item} />
                  </SwipeableWrapper>
                </View>
              );
            }}
            estimatedItemSize={10}
            contentContainerStyle={{ paddingBottom: 250 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <CheckoutCard price='20' />
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingLeft: 16,
    position: 'relative',
  },
});
