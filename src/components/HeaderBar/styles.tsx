import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.red,
    flexDirection: 'column',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    fontSize: SIZES.h1,
    fontWeight: '200',
    width: '80%',
    paddingBottom: 10,
  },
  inputContainer: {
    width: '80%',
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: SIZES.radius,
  },
  icon: {
    width: SIZES.padding,
    height: SIZES.padding,
    backgroundColor: 'lightcoral',
  },
});
