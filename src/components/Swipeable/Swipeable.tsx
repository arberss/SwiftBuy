import { DeleteIcon } from '@/assets/SvgIcons';
import { PropsWithChildren } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

interface RightActionsProps {
  dragX: any;
  onPress: () => void;
}

const RightActions = ({ dragX, onPress }: RightActionsProps) => {
  const trans = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.buttonStyle}>
      <Animated.Text
        style={[
          {
            transform: [{ translateX: trans }],
          },
        ]}
      >
        <DeleteIcon fillColor='transparent' />
      </Animated.Text>
    </TouchableOpacity>
  );
};

interface SwipeableWrapperProps extends PropsWithChildren {
  onPress: () => void;
}

const SwipeableWrapper = ({ children, onPress }: SwipeableWrapperProps) => {
  return (
    <Swipeable
      renderRightActions={(_progress: any, dragX: any) => (
        <RightActions dragX={dragX} onPress={onPress} />
      )}
    >
      {children}
    </Swipeable>
  );
};

export default SwipeableWrapper;

const styles = StyleSheet.create({
  buttonStyle: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D92D20',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
