import { Platform, StyleSheet } from 'react-native';
import { SIZES } from '../../constants/GlobalStyles';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? SIZES.height / 10 : SIZES.height / 10,
  },
});
