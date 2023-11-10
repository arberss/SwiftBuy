import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Pressable,
} from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
import Header from '@/components/Header/Header';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import CarouselDots from './components/CarouselDots';
import { ScrollView } from 'react-native-gesture-handler';
import Accordion from './components/Accordion';
import BottomCard from './components/BottomCard';
import { accordionData, sizes } from './helper';
import ProductCard from '@/components/Cards/ProductCard';
import { CartIcon, FavoriteIcon } from '@/assets/SvgIcons';
import { PRODUCTS } from '@/mockData/products';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');

const ProductDetails = () => {
  const route = useRoute() as { params: { productId: number } };
  const navigation = useNavigation<StackNavigationProp<any>>();

  const carouselRef = useRef<ICarouselInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleDotPress = (index: number) => {
    carouselRef?.current?.scrollTo({ index });
    setActiveIndex(index);
  };

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  const data = PRODUCTS.find(
    (product) => product.id === route?.params?.productId
  );

  const randomId = useMemo(() => {
    return Math.floor(Math.random() * PRODUCTS.length) + 1;
  }, []);

  const relatedProduct = useMemo(() => {
    return PRODUCTS.find((product) => product.id === randomId);
  }, [randomId, PRODUCTS.length]);

  return (
    <>
      <Header style={{ borderBottomWidth: 0 }}>
        <Header.Back />
        <Header.Favorite />
      </Header>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, { marginBottom: 145 }]}
      >
        <Carousel
          ref={carouselRef}
          loop={false}
          width={width}
          height={446}
          autoPlay={false}
          data={[data?.src]}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item }) => (
            <View style={styles.imageWrapper}>
              <Image style={styles.image} source={item} />
            </View>
          )}
        />
        <CarouselDots
          count={[data?.src]?.length}
          activeIndex={activeIndex}
          handleDotPress={handleDotPress}
        />
        <Text style={styles.productTitle}>{data?.title}</Text>

        <ScrollView horizontal style={styles.lineBorderPadding}>
          {sizes.map((item) => {
            return (
              <Pressable
                key={item.id}
                style={[
                  styles.sizeBody,
                  item.size === selectedSize && styles.sizeActiveBody,
                ]}
                onPress={() => handleSizeSelection(item.size)}
              >
                <Text
                  style={[
                    styles.sizeText,
                    item.size === selectedSize && styles.sizeActiveText,
                  ]}
                >
                  {item.size}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={[styles.lineBorderPadding, { borderTopWidth: 0 }]}>
          <Text style={styles.productDetailsTitle}>Product Details</Text>
          <Text style={styles.productDetailsText}>
            Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
            vitae magna in dui finibus malesuada et at nulla. Morbi elit ex,
            viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum
          </Text>
        </View>
        {accordionData.map((item) => {
          return (
            <Accordion
              key={item.id}
              title={item.title}
              description={item.description}
              style={{ borderTop: 0 }}
            />
          );
        })}

        <View style={{ paddingVertical: 10, paddingHorizontal: 24 }}>
          <Text style={styles.productDetailsTitle}>Related Products</Text>
          <ProductCard
            title={relatedProduct?.title!}
            price={relatedProduct?.price!}
            onPress={() => {
              navigation.push('ProductDetails', {
                productId: relatedProduct?.id,
              });
            }}
            customStyle={{ marginTop: 10 }}
            src={relatedProduct?.src}
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
      </ScrollView>
      <BottomCard price={data?.price!} />
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  imageWrapper: {
    width: '100%',
    height: 446,
    backgroundColor: '#F2F2F2',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 446,
    resizeMode: 'center',
  },
  productTitle: {
    color: '#141414',
    fontSize: 16,
    fontFamily: 'Saira-Medium',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  sizeBody: {
    width: 50,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    marginRight: 10,
  },
  sizeText: {
    color: '#141414',
    fontFamily: 'Saira-Light',
    fontSize: 14,
    textAlign: 'center',
  },
  sizeActiveBody: {
    backgroundColor: '#141414',
    borderColor: '#141414',
  },
  sizeActiveText: {
    color: '#fff',
  },
  lineBorderPadding: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  productDetailsTitle: {
    color: '#141414',
    fontFamily: 'Saira-Medium',
    fontSize: 16,
  },
  productDetailsText: {
    color: '#424242',
    fontFamily: 'Saira-Light',
    fontSize: 14,
    marginTop: 10,
  },
});
