import { CartTabIcon, FavoriteIcon, HomeIcon } from '@/assets/SvgIcons';
import CartScreen from '@/screens/Cart';
import FavoritesScreen from '@/screens/Favorites';
import HomeScreen from '@/screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          color: '#afafaf',
        },
        tabBarStyle: {
          padding: 16,
          borderTopWidth: 1,
          borderTopColor: '#EAECF0',
        },
      })}
    >
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.activeTab}>
                <HomeIcon stroke='#fff' />
              </View>
            ) : (
              <HomeIcon />
            ),
        }}
        name='HomeTab'
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.activeTab}>
                <CartTabIcon stroke='#fff' fillColor='transparent' />
              </View>
            ) : (
              <CartTabIcon />
            ),
        }}
        name='CartTab'
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.activeTab}>
                <FavoriteIcon
                  width='26px'
                  height='26px'
                  stroke='#fff'
                  wrapperStyle={{
                    borderWidth: 0,
                    backgroundColor: 'transparent',
                  }}
                />
              </View>
            ) : (
              <FavoriteIcon
                width='24px'
                height='24px'
                wrapperStyle={{
                  borderWidth: 0,
                  backgroundColor: 'transparent',
                }}
              />
            ),
        }}
        name='FavoriteTab'
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
};

export default NavigationTabs;

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: '#424242',
    padding: 1,
    borderRadius: 50,
  },
});
