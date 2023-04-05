import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom:
      Platform.OS === 'ios' ? SIZES.height / 8.5 : SIZES.height / 10,
  },
  infoContainer: {
    alignItems: 'center',
  },
  codeType: {
    fontSize: SIZES.h1 * 1.2,
    fontWeight: '700',
    marginTop: 25,
  },
  moto: {
    marginVertical: 10,
    color: COLORS.primary,
  },
  buttonsContainer: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom:
      Platform.OS === 'ios' ? SIZES.height / 10 : SIZES.height / 12,
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
