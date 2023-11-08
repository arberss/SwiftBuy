/* eslint-disable max-len */
import * as React from 'react';
import Svg, { G, Path, Circle, Defs } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

export function BackIcon(props: any) {
  const { fillColor = '#fff', width = '20px', height = '20px' } = props;
  return (
    <View style={styles.border}>
      <Svg
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <Path
          d='M15 18l-6-6 6-6'
          stroke='#737373'
          strokeWidth={1.66667}
          strokeLinecap='round'
          strokeLinejoin='round'
          fill={fillColor}
        />
      </Svg>
    </View>
  );
}

export function FavoriteIcon(props: any) {
  const { fillColor = '#fff', width = '20px', height = '20px' } = props;

  return (
    <View style={styles.border}>
      <Svg
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <Path
          clipRule='evenodd'
          d='M11.993 5.136c-2-2.338-5.333-2.966-7.838-.826s-2.858 5.719-.89 8.25c1.635 2.105 6.585 6.544 8.207 7.98.182.162.272.242.378.274a.504.504 0 00.286 0c.106-.032.197-.112.378-.273 1.623-1.437 6.573-5.876 8.208-7.98 1.967-2.532 1.658-6.133-.89-8.251-2.549-2.118-5.84-1.512-7.839.826z'
          stroke='#737373'
          strokeWidth={1.66667}
          strokeLinecap='round'
          strokeLinejoin='round'
          fill={fillColor}
        />
      </Svg>
    </View>
  );
}

export function SearchIcon(props: any) {
  const { fillColor = '#fff', width = '20px', height = '20px' } = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M17.5 17.5l-3.625-3.625M9.167 5a4.167 4.167 0 014.166 4.167m2.5 0a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z'
        stroke='#737373'
        strokeWidth={1.66667}
        strokeLinecap='round'
        strokeLinejoin='round'
        fill={fillColor}
      />
    </Svg>
  );
}

export function FilterIcon(props: any) {
  const { fillColor = '#fff', width = '20px', height = '20px' } = props;

  return (
    <View style={[styles.border, { borderRadius: 8 }]}>
      <Svg
        width={width}
        height={height}
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <Path
          d='M5 10h10M2.5 5h15m-10 10h5'
          stroke='#737373'
          strokeWidth={1.66667}
          strokeLinecap='round'
          strokeLinejoin='round'
          fill={fillColor}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 14,
    padding: 10,
  },
});
