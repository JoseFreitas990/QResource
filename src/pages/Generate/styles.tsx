import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/GlobalStyles';
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  itemTypeContainer: {
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.h3,
    flex: 1,
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
