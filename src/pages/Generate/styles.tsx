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
    paddingTop: SIZES.h2,
    paddingBottom: SIZES.h4,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
  linearContainer: {
    height: 85,
    width: 75,
    alignItems: 'center',
    borderRadius: SIZES.radius,

    justifyContent: 'center',
  },
  icon: {
    width: 35,
    height: 35,
    marginBottom: 5,
    tintColor: 'white',
  },
  typeText: {
    color: 'white',
  },
});
