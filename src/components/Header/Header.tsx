import { BackIcon, FavoriteIcon } from '@/assets/SvgIcons';
import { createContext, PropsWithChildren } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderContext = createContext(null);

interface HeaderProps extends PropsWithChildren {
  style?: Object;
}

const Header = ({ children, style }: HeaderProps) => {
  return (
    <HeaderContext.Provider value={null}>
      <View style={[styles.flex, style]}>{children}</View>
    </HeaderContext.Provider>
  );
};

const Title = ({ title }: { title: string }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const Back = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>
        <BackIcon />
      </Text>
    </TouchableOpacity>
  );
};

const Favorite = () => {
  return (
    <TouchableOpacity>
      <Text>
        <FavoriteIcon />
      </Text>
    </TouchableOpacity>
  );
};

Header.Back = Back;
Header.Favorite = Favorite;
Header.Title = Title;

export default Header;

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#D0D5DD',
  },
  title: {
    color: '#161A14',
    fontSize: 32,
    fontFamily: 'Saira-Medium',
  },
});
