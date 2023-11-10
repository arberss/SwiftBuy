import { ImageSourcePropType, Text, View } from 'react-native';
import React from 'react';
import ProductCard from '@/components/Cards/ProductCard';
import { CartIcon, FavoriteIcon } from '@/assets/SvgIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';

interface RelatedProductsProps {
  item: {
    id: number;
    title: string;
    price: string;
    src: ImageSourcePropType;
  };
}

const RelatedProducts = ({ item }: RelatedProductsProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

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
        icon={<FavoriteIcon customStyle={{ backgroundColor: '#fff' }} />}
        titleIcon={
          <CartIcon
            wrapperStyle={{
              backgroundColor: '#FAFAFA',
              borderColor: 'transparent',
            }}
          />
        }
      />
    </View>
  );
};

export default RelatedProducts;
