import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface IProductCardProps {
  title: string;
  price: string;
  src: ImageSourcePropType;
  customStyle?: Object;
  icon?: JSX.Element;
  onIconClick?: () => void;
  onPress?: () => void;
}

const ProductCard = ({
  title,
  price,
  src,
  customStyle,
  icon,
  onIconClick,
  onPress,
}: IProductCardProps) => {
  return (
    <TouchableOpacity style={[styles.wrapper, customStyle]} onPress={onPress}>
      {icon ? (
        <TouchableOpacity style={styles.iconButton} onPress={onIconClick}>
          <Text>{icon}</Text>
        </TouchableOpacity>
      ) : null}
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={src} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price} €</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    gap: 4,
    position: 'relative',
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
  iconButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
});
