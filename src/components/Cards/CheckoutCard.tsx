import { useCart } from '@/store/useCart';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const CheckoutCard = () => {
  const { cart } = useCart((state) => state);

  const calculateTotalPrice = useMemo(() => {
    return cart.reduce((acc, val) => {
      return acc + val.price;
    }, 0);
  }, [cart.length]);

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.itemText}>
          {cart.length} {cart.length === 1 ? 'item' : 'items'}
        </Text>
        <Text style={styles.itemText}>
          Total <Text style={styles.price}>€{calculateTotalPrice}</Text>
        </Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Checkout</Text>
      </Pressable>
    </View>
  );
};

export default CheckoutCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#E5E5E5',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    padding: 12,
    backgroundColor: '#141414',
    borderRadius: 8,
    marginTop: 16,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Saira-Medium',
    fontSize: 16,
  },
  itemText: {
    color: '#292929',
    fontFamily: 'Saira-Medium',
    fontSize: 16,
  },
  price: {
    color: '#292929',
    fontFamily: 'Saira-Bold',
    fontSize: 16,
  },
});
