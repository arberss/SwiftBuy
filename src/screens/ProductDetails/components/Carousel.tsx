import { forwardRef } from 'react';
import { Dimensions, Image, ImageSourcePropType, View } from 'react-native';
import CarouselComponent, {
  ICarouselInstance,
} from 'react-native-reanimated-carousel';
import { styles } from '../styles';
import CarouselDots from './CarouselDots';

const { width } = Dimensions.get('window');

interface CarouselProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  handleDotPress: (index: number) => void;
  image: ImageSourcePropType;
}

const Carousel = forwardRef<ICarouselInstance, CarouselProps>(
  ({ activeIndex, setActiveIndex, handleDotPress, image }, ref) => {
    return (
      <>
        <CarouselComponent
          ref={ref}
          loop={false}
          width={width}
          height={446}
          autoPlay={false}
          data={[image]}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item }) => (
            <View style={styles.imageWrapper}>
              <Image style={styles.image} source={item} />
            </View>
          )}
        />
        <CarouselDots
          count={[image]?.length}
          activeIndex={activeIndex}
          handleDotPress={handleDotPress}
        />
      </>
    );
  }
);

export default Carousel;
