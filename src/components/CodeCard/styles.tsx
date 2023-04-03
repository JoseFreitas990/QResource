import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  card: {
    borderRadius: SIZES.h3,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  infoContainer: {
    width: '80%',
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
    borderColor: COLORS.black,
    justifyContent: 'center',
    paddingLeft: 20,
    overflow: 'hidden',
    borderTopRightRadius: SIZES.h3,
    borderBottomRightRadius: SIZES.h3,

    height: '100%',
    backgroundColor: COLORS.white,
  },
  iconContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,

    height: '100%',
    backgroundColor: 'transparent',
  },
  icon: {
    width: 45,
    height: 45,
    resizeMode: 'cover',
  },
  name: {
    fontWeight: '600',
    fontSize: SIZES.h3,
  },
  value: {
    width: '75%',
    fontSize: SIZES.h4,
    fontWeight: '400',
  },
});
