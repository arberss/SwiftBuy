import { Pressable, StyleSheet, View } from 'react-native';

interface CarouselDotsProps {
  count: number;
  activeIndex: number;
  handleDotPress: (index: number) => void;
}

const CarouselDots = ({
  count,
  handleDotPress,
  activeIndex,
}: CarouselDotsProps) => {
  return (
    <View style={styles.dots}>
      {Array.from({ length: count ?? 0 }).map((_, index) => {
        return (
          <Pressable
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#141414' : '#E5E5E5',
              },
            ]}
            onPress={() => handleDotPress(index)}
          />
        );
      })}
    </View>
  );
};

export default CarouselDots;

const styles = StyleSheet.create({
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#E5E5E5',
    borderRadius: 50,
  },
});
