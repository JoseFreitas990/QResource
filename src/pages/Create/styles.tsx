import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
