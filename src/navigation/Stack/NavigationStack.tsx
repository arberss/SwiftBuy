import ProductDetailsScreen from '@/screens/ProductDetails';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from '../Tabs/NavigationTabs';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Main'
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ProductDetails'
        component={ProductDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
