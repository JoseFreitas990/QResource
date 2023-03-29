import { Platform, StyleSheet } from 'react-native';
import { SIZES } from '../../constants/GlobalStyles';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom:
      Platform.OS === 'ios' ? SIZES.height / 7.5 : SIZES.height / 10,
  },
});
