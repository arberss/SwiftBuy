import ProductDetailsScreen from '@/screens/ProductDetails';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProductDetailsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='ProductDetails'
        component={ProductDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProductDetailsStack;
