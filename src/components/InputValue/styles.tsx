import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.radius,
  },
  header: {
    color: COLORS.gray,
  },
  bodyContainer: {
    width: '75%',
    paddingRight: SIZES.base,
    justifyContent: 'flex-end',
  },
  textContainer: {
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
    paddingTop: 2,
    paddingBottom: 3,
  },
  text: {
    fontSize: SIZES.h3,
  },
});
