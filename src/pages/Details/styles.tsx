import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  QRContainer: {
    height: '45%',
    width: '100%',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? '10%' : StatusBar.currentHeight,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
  },

  informationContainer: {
    height: '40%',
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: SIZES.h1 * 1.3,
    fontWeight: '600',
  },
  buttonsContainer: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
