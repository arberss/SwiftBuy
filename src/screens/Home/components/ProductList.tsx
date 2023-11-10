import { CartIcon } from '@/assets/SvgIcons';
import ProductCard from '@/components/Cards/ProductCard';
import { PRODUCTS } from '@/mockData/products';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlashList } from '@shopify/flash-list';
import { View } from 'react-native';

const ProductList = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={PRODUCTS}
        renderItem={({ item, index }) => {
          return (
            <ProductCard
              item={item}
              onPress={() => {
                navigation.navigate('ProductDetails', {
                  productId: item.id,
                });
              }}
              customStyle={{ marginTop: index < 1 ? 0 : 22 }}
              icon={<CartIcon wrapperStyle={{ backgroundColor: '#fff' }} />}
            />
          );
        }}
        estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;
