import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import ProductCard from '@/components/Cards/ProductCard';
import { FlashList } from '@shopify/flash-list';
import { PRODUCTS } from '@/mockData/products';
import { CartIcon } from '@/assets/SvgIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <>
      <SafeAreaView edges={['top']}>
        <Header>
          <Header.Title title='SwiftBuy' />
        </Header>
      </SafeAreaView>
      <View style={styles.container}>
        <Input placeholder='Search' onChangeText={() => {}} value={''} />
        <View style={{ flex: 1 }}>
          <FlashList
            data={PRODUCTS}
            renderItem={({ item, index }) => {
              return (
                <ProductCard
                  title={item?.title}
                  price={item?.price}
                  onPress={() => {
                    navigation.navigate('ProductDetails', {
                      productId: item.id,
                    });
                  }}
                  customStyle={{ marginTop: index < 1 ? 0 : 22 }}
                  src={item.src}
                  icon={<CartIcon wrapperStyle={{ backgroundColor: '#fff' }} />}
                />
              );
            }}
            estimatedItemSize={10}
            showsVerticalScrollIndicator={false}
          />
        </View>
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
