/* eslint-disable max-len */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

export function BackIcon(props: any) {
  const {
    wrapperStyle,
    fillColor = '#fff',
    width = '20px',
    height = '20px',
  } = props;
  return (
    <View style={[styles.border, wrapperStyle]}>
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
  const {
    wrapperStyle,
    fillColor = '#fff',
    width = '20px',
    height = '20px',
  } = props;

  return (
    <View style={[styles.border, wrapperStyle]}>
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
  const {
    wrapperStyle,
    fillColor = '#fff',
    width = '20px',
    height = '20px',
  } = props;

  return (
    <View style={wrapperStyle}>
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
    </View>
  );
}

export function FilterIcon(props: any) {
  const {
    wrapperStyle,
    fillColor = '#fff',
    width = '20px',
    height = '20px',
  } = props;

  return (
    <View style={[styles.border, wrapperStyle]}>
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

export function CartIcon(props: any) {
  const {
    fillColor = '#fff',
    width = '20px',
    height = '20px',
    wrapperStyle,
  } = props;

  return (
    <View style={[styles.border, wrapperStyle]}>
      <Svg
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <Path
          d='M2 2h1.306c.246 0 .37 0 .468.045a.5.5 0 01.213.185c.059.092.076.213.111.457L4.571 6m0 0l1.052 7.731c.134.982.2 1.472.435 1.841a2 2 0 00.853.745c.398.183.893.183 1.883.183h8.558c.942 0 1.414 0 1.799-.17a2 2 0 00.841-.696c.239-.346.327-.81.503-1.735l1.324-6.95c.062-.325.093-.488.048-.615a.5.5 0 00-.22-.266C21.532 6 21.366 6 21.034 6H4.571zM10 21a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z'
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

export function HomeIcon(props: any) {
  const {
    wrapperStyle,
    fillColor = '#fff',
    width = '50px',
    height = '50px',
    stroke = '#A3A3A3',
  } = props;

  return (
    <View style={wrapperStyle}>
      <Svg
        width={width}
        height={height}
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <Path
          d='M16 23.565c0-.574 0-.862.074-1.126a2 2 0 01.318-.65c.163-.22.39-.397.843-.75l6.783-5.275c.351-.273.527-.41.72-.462a1 1 0 01.523 0c.194.052.37.189.721.462l6.783 5.275c.453.353.68.53.843.75a2 2 0 01.318.65c.074.264.074.552.074 1.126V30.8c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C32.48 34 31.92 34 30.8 34H19.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C16 32.48 16 31.92 16 30.8v-7.235z'
          stroke={stroke}
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
          fill={fillColor}
        />
      </Svg>
    </View>
  );
}

export function CartTabIcon(props: any) {
  const {
    wrapperStyle,
    fillColor = '#fff',
    width = '50px',
    height = '50px',
    stroke = '#A3A3A3',
  } = props;

  return (
    <View style={wrapperStyle}>
      <Svg
        width={width}
        height={height}
        viewBox='0 0 51 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <Path
          d='M29.334 22v-3a4 4 0 00-8 0v3m-4.408 1.352l-.6 6.4c-.17 1.82-.256 2.73.046 3.432a3 3 0 001.32 1.45c.671.366 1.585.366 3.413.366h8.458c1.827 0 2.741 0 3.413-.366a3 3 0 001.32-1.45c.302-.703.216-1.612.046-3.432l-.6-6.4c-.144-1.537-.216-2.305-.562-2.886a3 3 0 00-1.292-1.176c-.61-.29-1.382-.29-2.925-.29h-7.258c-1.544 0-2.315 0-2.926.29a3 3 0 00-1.292 1.176c-.345.581-.417 1.35-.561 2.886z'
          stroke={stroke}
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
          fill={fillColor}
        />
      </Svg>
    </View>
  );
}

export function ArrowBottomIcon(props: any) {
  const {
    wrapperStyle,
    fillColor = '#fff',
    width = '24px',
    height = '24px',
  } = props;

  return (
    <View style={wrapperStyle}>
      <Svg
        width={width}
        height={height}
        viewBox='0 0 24 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <Path
          d='M6 9.5l6 6 6-6'
          stroke='#141414'
          strokeWidth={2}
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
    backgroundColor: '#fff',
  },
});
