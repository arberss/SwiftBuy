import { BackIcon, FavoriteIcon } from '@/assets/SvgIcons';
import { createContext, PropsWithChildren } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

const HeaderContext = createContext(null);

const Header = ({ children }: PropsWithChildren) => {
  return (
    <HeaderContext.Provider value={null}>
      <View style={styles.flex}>{children}</View>
    </HeaderContext.Provider>
  );
};

const Title = ({ title }: { title: string }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const Back = () => {
  return (
    <TouchableOpacity onPress={() => router.back()}>
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
