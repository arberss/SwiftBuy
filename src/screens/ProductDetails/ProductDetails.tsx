import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Pressable,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Header from '@/components/Header/Header';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import CarouselDots from './components/CarouselDots';
import { ScrollView } from 'react-native-gesture-handler';
import Accordion from './components/Accordion';
import BottomCard from './components/BottomCard';
import { accordionData } from './helper';

const IMAGES = [
  {
    id: 1,
    src: require('@/assets/images/prod1img.png'),
  },
  {
    id: 2,
    src: require('@/assets/images/prod1img.png'),
  },
  {
    id: 3,
    src: require('@/assets/images/prodimg2.png'),
  },
];

const sizes = [
  {
    id: 1,
    size: 'XS',
  },
  {
    id: 2,
    size: 'S',
  },
  {
    id: 3,
    size: 'M',
  },
  {
    id: 4,
    size: 'L',
  },
  {
    id: 5,
    size: 'XL',
  },
];

const { width } = Dimensions.get('window');

const ProductDetails = () => {
  const carouselRef = useRef<ICarouselInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotPress = (index: number) => {
    carouselRef?.current?.scrollTo({ index });
    setActiveIndex(index);
  };

  return (
    <>
      <Header style={{ borderBottomWidth: 0 }}>
        <Header.Back />
        <Header.Favorite />
      </Header>
      <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, { marginBottom: 150 }]}>
        <Carousel
          ref={carouselRef}
          loop={false}
          width={width}
          height={446}
          autoPlay={false}
          data={IMAGES}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item }) => (
            <View style={styles.imageWrapper}>
              <Image style={styles.image} source={item.src} />
            </View>
          )}
        />
        <CarouselDots
          count={IMAGES?.length}
          activeIndex={activeIndex}
          handleDotPress={handleDotPress}
        />
        <Text style={styles.productTitle}>Title</Text>

        <ScrollView horizontal style={styles.lineBorderPadding}>
          {sizes.map((item) => {
            return (
              <Pressable key={item.id} style={[styles.sizeBody]}>
                <Text style={[styles.sizeText]}>{item.size}</Text>
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
      </ScrollView>
      <BottomCard price='99.00' />
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  wrapper: {
    // flexGrow: 1,
    // position: 'relative',
  },
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
    backgroundColor: '#141414',
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
    bordercolor: '#141414',
    marginRight: 10,
  },
  sizeText: {
    color: '#fff',
    fontFamily: 'Saira-Light',
    fontSize: 14,
    textAlign: 'center',
  },
  sizeActiveBody: {
    backgroundColor: '#fff',
    borderColor: '#D6D6D6',
  },
  sizeActiveText: {
    color: '#141414',
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
