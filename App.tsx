import Home from '@/app';
import useFontsHook from '@/hooks/useFonts';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  useFontsHook();

  return (
    <SafeAreaProvider style={styles.container}>
      <Home />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
