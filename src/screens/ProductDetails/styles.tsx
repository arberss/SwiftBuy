import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    width: '100%',
    height: 446,
    backgroundColor: '#F2F2F2',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 446,
    resizeMode: 'center',
  },
  productTitle: {
    color: '#141414',
    fontSize: 16,
    fontFamily: 'Saira-Medium',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  sizeBody: {
    width: 50,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    marginRight: 10,
  },
  sizeText: {
    color: '#141414',
    fontFamily: 'Saira-Light',
    fontSize: 14,
    textAlign: 'center',
  },
  sizeActiveBody: {
    backgroundColor: '#141414',
    borderColor: '#141414',
  },
  sizeActiveText: {
    color: '#fff',
  },
  lineBorderPadding: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  productDetailsTitle: {
    color: '#141414',
    fontFamily: 'Saira-Medium',
    fontSize: 16,
  },
  productDetailsText: {
    color: '#424242',
    fontFamily: 'Saira-Light',
    fontSize: 14,
    marginTop: 10,
  },
});
