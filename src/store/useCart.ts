import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageSourcePropType } from 'react-native/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  src: ImageSourcePropType;
}

interface UseCartProps {
  cart: IProduct[];
  setInCart: (item: IProduct) => void;
  removeFromCart: (productId: number) => void;
}

export const useCart = create<UseCartProps>()(
  persist(
    (set) => ({
      cart: [],
      setInCart: (item: IProduct) =>
        set((state) => ({ cart: [...state.cart, item] })),
      removeFromCart: (productId: number) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
    }),
    {
      name: 'swiftbuy-cart',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
