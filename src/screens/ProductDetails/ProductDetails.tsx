import { Image, View, Dimensions, Text } from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
import Header from '@/components/Header/Header';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import CarouselDots from './components/CarouselDots';
import { ScrollView } from 'react-native-gesture-handler';
import Accordion from './components/Accordion';
import BottomCard from '../../components/Cards/BottomCard';
import { accordionData } from './helper';
import { PRODUCTS } from '@/mockData/products';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import RelatedProducts from './components/RelatedProducts';
import ProductSizes from './components/ProductSizes';

const { width } = Dimensions.get('window');

const ProductDetails = () => {
  const route = useRoute() as { params: { productId: number } };

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
      <SafeAreaView edges={['top']}>
        <Header style={{ borderBottomWidth: 0 }}>
          <Header.Back />
          <Header.Favorite />
        </Header>
      </SafeAreaView>
      <View style={{ flexGrow: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.container]}
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
          <ProductSizes
            selectedSize={selectedSize}
            handleSizeSelection={handleSizeSelection}
          />

          <View style={[styles.lineBorderPadding, { borderTopWidth: 0 }]}>
            <Text style={styles.productDetailsTitle}>Product Details</Text>
            <Text style={styles.productDetailsText}>
              Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
              Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit
              ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
              fermentum
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
          <RelatedProducts item={relatedProduct!} />
        </ScrollView>
        <SafeAreaView edges={['bottom']}>
          <BottomCard price={data?.price!} />
        </SafeAreaView>
      </View>
    </>
  );
};

export default ProductDetails;
