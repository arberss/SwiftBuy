import { FilterIcon, SearchIcon } from '@/assets/SvgIcons';
import { StyleSheet, TextInput, View } from 'react-native';

interface InputProps {
  onChangeText: (value: string) => void;
  value: string;
  placeholder: string;
}

const Input = ({ onChangeText, value, placeholder }: InputProps) => {
  return (
    <View style={styles.wrapper}>
      <SearchIcon />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor='#737373'
        autoCorrect={false}
      />
      <FilterIcon />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 4,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Saira-Light',
    fontSize: 14,
    color: '#737373',
  },
});
