import { Text, View } from 'react-native';
import React, { useMemo } from 'react';
import ProductCard from '@/components/Cards/ProductCard';
import {
  CartFilledIcon,
  CartIcon,
  FavoriteFilledIcon,
  FavoriteIcon,
} from '@/assets/SvgIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';
import { IProduct, useCart } from '@/store/useCart';
import { useFavorites } from '@/store/useFavorites';

interface RelatedProductsProps {
  item: IProduct;
}

const RelatedProducts = ({ item }: RelatedProductsProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { cart } = useCart((state) => state);
  const { favorites } = useFavorites((state) => state);

  const checkCart = useMemo(() => {
    return cart.find((cartItem) => cartItem.id === item.id);
  }, [item.id, cart.length]);

  const CardIcon = checkCart ? (
    <CartFilledIcon wrapperStyle={{ backgroundColor: '#000' }} />
  ) : (
    <CartIcon
      wrapperStyle={{
        backgroundColor: '#FAFAFA',
        borderColor: 'transparent',
      }}
    />
  );

  const checkFavorite = useMemo(() => {
    return favorites.find((favoriteItem) => favoriteItem.id === item.id);
  }, [item.id, favorites.length]);

  const FavIcon = checkFavorite ? (
    <FavoriteFilledIcon />
  ) : (
    <FavoriteIcon customStyle={{ backgroundColor: '#fff' }} />
  );

  return (
    <View style={{ paddingVertical: 10, paddingHorizontal: 24 }}>
      <Text style={styles.productDetailsTitle}>Related Products</Text>
      <ProductCard
        item={item}
        onPress={() => {
          navigation.push('ProductDetails', {
            productId: item?.id,
          });
        }}
        customStyle={{ marginTop: 10 }}
        icon={FavIcon}
        titleIcon={CardIcon}
      />
    </View>
  );
};

export default RelatedProducts;
