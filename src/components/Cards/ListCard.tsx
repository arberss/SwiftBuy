import { IProduct } from '@/store/useCart';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ListCardProps {
  item: IProduct;
  customStyle?: Object;
}

const ListCard = ({ item, customStyle }: ListCardProps) => {
  return (
    <View style={[styles.flex, customStyle]}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={item?.src} />
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.price}>€{item?.price}</Text>
      </View>
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    columnGap: 10,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    width: 140,
    height: 180,
    borderRadius: 24,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 24,
  },
  rightContent: {
    width: '80%',
    flexShrink: 1,
  },
  title: {
    width: '80%',
    color: '#292929',
    fontSize: 16,
    fontFamily: 'Saira-Light',
  },
  price: {
    color: '#292929',
    fontSize: 16,
    fontFamily: 'Saira-Bold',
    marginTop: 5,
  },
});
