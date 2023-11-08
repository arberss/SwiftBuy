import { useFonts } from 'expo-font';

const useFontsHook = () => {
  const [fontsLoaded] = useFonts({
    'Saira-Light': require('@/assets/fonts/Saira-Light.ttf'),
    'Saira-Medium': require('@/assets/fonts/Saira-Medium.ttf'),
    'Saira-Bold': require('@/assets/fonts/Saira-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return { fontsLoaded };
};

export default useFontsHook;
