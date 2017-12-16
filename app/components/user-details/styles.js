import { Platform } from 'react-native'
import { colors } from '../../constants/style'

export default {
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: Platform.select({
      android: 20,
      ios: 40,
    }),
    right: 20,
    height: 30,
    width: 30,
    zIndex: 1,
  },
  closeButton: {
    opacity: 0.3,
    height: 30,
    width: 30,
  },
  scrollContainer: {
    paddingVertical: Platform.select({
      ios: 40,
      android: 20,
    }),
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: colors.black,
    fontSize: 26,
    fontFamily: 'Roboto',
    fontWeight: '500',
    textAlign: 'center',
  },
  rankContainer: {
    flexDirection: 'column',
  },
  rankDataContainer: {
    flexDirection: 'row',
  },
  rankTextContainer: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rankImage: {
    height: 70,
    width: 70,
  },
  rankQueue: {
    color: colors.black,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '300',
  },
  rankName: {
    color: colors.black,
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  rankWinrate: {
    color: colors.grey,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '300',
  },
  rolesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  roleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  roleImage: {
    height: 60,
    width: 60,
  },
  roleText: {
    color: colors.grey,
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '300',
  },
  championsContainer: {
    flexDirection: 'row',
  },
  championImage: {
    flex: 1,
    marginHorizontal: 10,
  },
  localesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  localeImage: {
    height: 50,
    marginHorizontal: 10,
    width: 50,
  },
  communicationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  communicationImage: {
    marginHorizontal: 10,
  },
  communicationImageDisabled: {
    opacity: 0.3,
    marginHorizontal: 10,
  },
}
