import { CartFilledIcon, CartIcon } from '@/assets/SvgIcons';
import ProductCard from '@/components/Cards/ProductCard';
import EmptyListText from '@/components/EmptyListText/EmptyListText';
import { IProduct, useCart } from '@/store/useCart';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlashList } from '@shopify/flash-list';
import { View } from 'react-native';

interface ProductListProps {
  data: IProduct[];
}

const ProductList = ({ data }: ProductListProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { cart, setInCart } = useCart((state) => state);

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={data}
        extraData={cart.length}
        renderItem={({ item, index }) => {
          const checkCart = cart.find((cartItem) => cartItem.id === item.id);
          const CardIcon = checkCart ? (
            <CartFilledIcon wrapperStyle={{ backgroundColor: '#000' }} />
          ) : (
            <CartIcon wrapperStyle={{ backgroundColor: '#fff' }} />
          );

          return (
            <ProductCard
              item={item}
              onPress={() => {
                navigation.navigate('ProductDetails', {
                  productId: item.id,
                });
              }}
              customStyle={{ marginTop: index < 1 ? 0 : 22 }}
              icon={CardIcon}
              onIconClick={() => (checkCart ? null : setInCart(item))}
            />
          );
        }}
        ListEmptyComponent={<EmptyListText text='No products in list' />}
        estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;
