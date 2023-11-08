import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface IProductCardProps {
  title: string;
  price: string;
  src: ImageSourcePropType;
  customStyle?: Object;
}

const ProductCard = ({ title, price, src, customStyle }: IProductCardProps) => {
  return (
    <View style={[styles.wrapper, customStyle]}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={src} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price} €</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    gap: 4,
  },
  imageWrapper: {
    width: '100%',
    height: 340,
    borderRadius: 24,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 24,
  },
  title: {
    color: '#161A14',
    fontFamily: 'Saira-Medium',
    fontSize: 20,
  },
  price: {
    color: '#161A14',
    fontFamily: 'Saira-Light',
    fontSize: 16,
  },
});
