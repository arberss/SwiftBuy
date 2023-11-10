import { CartTabIcon, FavoriteIcon, HomeIcon } from '@/assets/SvgIcons';
import Cart from '@/screens/Cart/Cart';
import Favorites from '@/screens/Favorites/Favorites';
import Home from '@/screens/Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, View } from 'react-native';

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
          ...Platform.select({
            ios: {
              padding: 16,
            },
            android: {
              padding: 0,
            },
          }),
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
                <HomeIcon stroke='#fff' width='40px' height='40px' />
              </View>
            ) : (
              <HomeIcon />
            ),
        }}
        name='HomeTab'
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.activeTab}>
                <CartTabIcon
                  stroke='#fff'
                  fillColor='transparent'
                  width='40px'
                  height='40px'
                />
              </View>
            ) : (
              <CartTabIcon />
            ),
        }}
        name='CartTab'
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.activeTab}>
                <FavoriteIcon
                  width='20px'
                  height='20px'
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
        component={Favorites}
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
