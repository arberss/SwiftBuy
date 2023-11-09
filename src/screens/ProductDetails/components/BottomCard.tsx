import { Pressable, StyleSheet, Text, View } from 'react-native';

interface BottomCardProps {
  price: string;
}

const BottomCard = ({ price }: BottomCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>€{price}</Text>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Add To Cart</Text>
      </Pressable>
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
    position: 'absolute',
    bottom: 100,
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
  },
  price: {
    color: '#141414',
    fontSize: 22,
    fontFamily: 'Saira-Bold',
  },
});
