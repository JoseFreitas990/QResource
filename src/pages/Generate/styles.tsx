import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/GlobalStyles';
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:
      Platform.OS === 'ios' ? SIZES.height / 7.5 : SIZES.height / 10,
  },
  itemTypeContainer: {
    paddingVertical: SIZES.h1,
    paddingHorizontal: SIZES.h3,
  },
  linearContainer: {
    height: 85,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 5,
  },
  typeText: {
    color: 'white',
  },
});
