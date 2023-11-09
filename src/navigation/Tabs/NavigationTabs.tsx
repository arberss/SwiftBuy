import { CartTabIcon, HomeIcon } from '@/assets/SvgIcons';
import CartScreen from '@/screens/Cart';
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
                <CartTabIcon stroke='#fff' />
              </View>
            ) : (
              <CartTabIcon />
            ),
        }}
        name='CartTab'
        component={CartScreen}
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
