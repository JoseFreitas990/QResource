import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    paddingBottom:
      Platform.OS === 'ios' ? SIZES.height / 8.5 : SIZES.height / 10,
  },
});
