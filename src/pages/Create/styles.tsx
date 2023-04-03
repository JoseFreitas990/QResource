import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom:
      Platform.OS === 'ios' ? SIZES.height / 8.5 : SIZES.height / 12,
  },
  informationContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    paddingTop: SIZES.padding,
    fontSize: SIZES.h1 * 1.2,
    fontWeight: '700',
    paddingBottom: SIZES.base,
  },
  codeType: {
    color: COLORS.primary,
    fontSize: SIZES.h3,
    paddingBottom: SIZES.padding,
  },
  buttonsContainer: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: Platform.OS === 'ios' ? SIZES.height / 12 : 0,
  },
  buttonPrimary: {
    backgroundColor: COLORS.yellow,
    width: 150,
    paddingHorizontal: 50,
    alignItems: 'center',
    paddingVertical: 15,
  },
  buttonSecondary: {
    width: 150,
    backgroundColor: COLORS.yellow,
    paddingHorizontal: 50,
    alignItems: 'center',
  },
});
