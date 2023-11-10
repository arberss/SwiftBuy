import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '@/components/Header/Header';
import { FlashList } from '@shopify/flash-list';
import SwipeableWrapper from '@/components/Swipeable/Swipeable';
import ListCard from '@/components/Cards/ListCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFavorites } from '@/store/useFavorites';
import EmptyListText from '@/components/EmptyListText/EmptyListText';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites((state) => state);

  return (
    <>
      <SafeAreaView edges={['top']}>
        <Header>
          <Header.Title title='SwiftBuy' />
        </Header>
      </SafeAreaView>
      <View style={styles.container}>
        <FlashList
          data={favorites}
          renderItem={({ item, index }) => {
            return (
              <View style={{ marginTop: index < 1 ? 0 : 16 }}>
                <SwipeableWrapper onPress={() => removeFromFavorites(item.id)}>
                  <ListCard item={item} />
                </SwipeableWrapper>
              </View>
            );
          }}
          ListEmptyComponent={
            <EmptyListText text="You don't have any favorite product" />
          }
          estimatedItemSize={10}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingLeft: 16,
  },
});
