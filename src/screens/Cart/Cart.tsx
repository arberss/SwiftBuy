import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '@/components/Header/Header';
import ListCard from '@/components/Cards/ListCard';
import { FlashList } from '@shopify/flash-list';
import SwipeableWrapper from '@/components/Swipeable/Swipeable';
import CheckoutCard from '../../components/Cards/CheckoutCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '@/store/useCart';
import EmptyListText from '@/components/EmptyListText/EmptyListText';

const Cart = () => {
  const { cart, removeFromCart } = useCart((state) => state);

  return (
    <>
      <SafeAreaView edges={['top']}>
        <Header>
          <Header.Title title='SwiftBuy' />
        </Header>
      </SafeAreaView>
      <View style={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <FlashList
            data={cart}
            renderItem={({ item, index }) => {
              return (
                <View style={{ marginTop: index < 1 ? 0 : 16 }}>
                  <SwipeableWrapper onPress={() => removeFromCart(item.id)}>
                    <ListCard item={item} />
                  </SwipeableWrapper>
                </View>
              );
            }}
            ListEmptyComponent={
              <EmptyListText text="You don't have any product in cart" />
            }
            estimatedItemSize={10}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <CheckoutCard />
      </View>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingLeft: 16,
    position: 'relative',
  },
});
