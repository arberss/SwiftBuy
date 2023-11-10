import { IProduct } from '@/store/useCart';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface IProductCardProps {
  item: IProduct;
  customStyle?: Object;
  icon?: JSX.Element;
  onIconClick?: () => void;
  onPress?: () => void;
  titleIcon?: JSX.Element;
  onTitleIconClick?: () => void;
}

const ProductCard = ({
  item,
  customStyle,
  icon,
  onIconClick,
  onPress,
  titleIcon,
  onTitleIconClick,
}: IProductCardProps) => {
  return (
    <TouchableOpacity style={[styles.wrapper, customStyle]} onPress={onPress}>
      {icon ? (
        <Pressable style={styles.iconButton} onPress={onIconClick}>
          <Text>{icon}</Text>
        </Pressable>
      ) : null}
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={item?.src} />
      </View>
      <View style={[styles.titleFlex, { marginTop: titleIcon ? 10 : 0 }]}>
        <Text style={styles.title}>{item?.title}</Text>
        {titleIcon && (
          <Pressable onPress={onTitleIconClick}>
            <Text>{titleIcon}</Text>
          </Pressable>
        )}
      </View>
      <Text style={styles.price}>{item?.price} €</Text>
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
  titleFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
