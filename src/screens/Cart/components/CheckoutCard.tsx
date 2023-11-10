import { Pressable, StyleSheet, Text, View } from 'react-native';

interface CheckoutCardProps {
  price: string;
}

const CheckoutCard = ({ price }: CheckoutCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text>3 items</Text>
        <Text>
          Total €<Text>{price}</Text>
        </Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Add To Cart</Text>
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
    position: 'absolute',
    bottom: 78,
    backgroundColor: '#fff',
    borderWidth: 1,
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
  },
});
