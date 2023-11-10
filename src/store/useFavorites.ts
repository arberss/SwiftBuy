import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { IProduct } from './useCart';

interface UseFavoritesProps {
  favorites: IProduct[];
  setInFavorites: (item: IProduct) => void;
  removeFromFavorites: (productId: number) => void;
}

export const useFavorites = create<UseFavoritesProps>()(
  persist(
    (set) => ({
      favorites: [],
      setInFavorites: (item: IProduct) =>
        set((state) => ({ favorites: [...state.favorites, item] })),
      removeFromFavorites: (productId: number) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== productId),
        })),
    }),
    {
      name: 'swiftbuy-favorites',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
