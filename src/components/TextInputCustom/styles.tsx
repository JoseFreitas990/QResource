import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.width * 0.1,
  },
  title: {
    paddingVertical: SIZES.base,
  },
  inputContainer: {
    width: SIZES.width * 0.8,
    paddingVertical: SIZES.padding * 0.8,
    borderRadius: SIZES.radius,
    paddingHorizontal: 10,
  },
  input: {},
});
