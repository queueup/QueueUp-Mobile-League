import {Platform} from 'react-native'
import { colors, shadows } from '../../constants/style'

export const style = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -100,
  },
  rankImage: {
    height: 120,
    width: 120,
    zIndex: 1,
  },
  card: {
    minWidth: 300,
    backgroundColor: '#fff',
    marginTop: -75,
    paddingTop: 75,
    borderRadius: 4,
    ...Platform.select({
      ios: shadows.basicShadow,
      android: {
        borderWidth: 0.5,
        borderColor: colors.grey,
      },
    }),
  },
  rankText: {
    textAlign: 'center',
  },
  rolesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  roleImage: {
    height: 40,
    width: 40,
    marginHorizontal: 10,
  },
  championsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  championImage: {
    marginHorizontal: 1,
    height: 50,
    width: 50,
  },
  localesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  localeImage: {
    marginHorizontal: 5,
    height: 30,
    width: 30,
  },
  communicationsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  communicationImage: {
    marginHorizontal: 10,
  },
  recapContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  recap: {
    flex: 1,
  },
  recapWithBorder: {
    borderLeftWidth: 1,
    borderLeftColor: colors.lightGrey,
  },
  recapTitle: {
    fontFamily: 'Roboto',
    color: colors.black,
    fontSize: 16,
    fontWeight: '100',
    textAlign: 'center',
  },
  recapValue: {
    fontFamily: 'Roboto',
    color: colors.grey,
    fontSize: 26,
    fontWeight: '100',
    textAlign: 'center',
  },
}
