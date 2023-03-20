import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.primary,
    width: '40%',
    paddingVertical: 14,
    borderRadius: SIZES.base,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainerSecondary: {
    backgroundColor: COLORS.white,
    width: '40%',
    paddingVertical: 14,
    borderRadius: SIZES.base,
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: COLORS.primary,
    borderWidth: 3,
  },
  textSecondary: {
    color: COLORS.primary,
    fontWeight: '600',
    textAlign: 'center',
  },
});
