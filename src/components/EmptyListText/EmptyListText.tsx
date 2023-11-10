import { StyleSheet, Text } from 'react-native';

const EmptyListText = ({ text }: { text: string }) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default EmptyListText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'Saira-Medium',
    fontSize: 18,
  },
});
