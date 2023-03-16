import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  card: {
    marginVertical: 15,
    borderRadius: SIZES.h3,
    width: '80%',
    height: '8.5%',
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  infoContainer: {
    width: '80%',
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
    borderColor: COLORS.black,
    justifyContent: 'center',
    paddingLeft: 20,
    height: '100%',
    backgroundColor: COLORS.white,
  },
  iconContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'trasparent',
  },
  name: {
    fontWeight: '600',
    fontSize: SIZES.h3,
  },
  value: {
    fontSize: SIZES.h4,
    fontWeight: '400',
  },
});
