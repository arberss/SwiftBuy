import { IProduct, useCart } from '@/store/useCart';
import { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface BottomCardProps {
  item: IProduct;
}

const BottomCard = ({ item }: BottomCardProps) => {
  const { cart, setInCart } = useCart((state) => state);

  const checkCart = useMemo(() => {
    return cart.find((cartItem) => cartItem.id === item.id);
  }, [item.id, cart.length]);

  return (
    <View style={styles.container}>
      <Text style={styles.price}>€{item?.price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setInCart(item)}
        disabled={!!checkCart}
      >
        <Text style={styles.text}>{checkCart ? 'In Cart' : 'Add To Cart'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.05,
    shadowColor: '#000',
    elevation: 4,
  },
  button: {
    minWidth: 150,
    padding: 12,
    backgroundColor: '#141414',
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Saira-Medium',
    fontSize: 16
  },
  price: {
    color: '#141414',
    fontSize: 22,
    fontFamily: 'Saira-Bold',
  },
});
