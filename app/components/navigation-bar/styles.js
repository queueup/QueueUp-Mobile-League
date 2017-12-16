import { Platform } from 'react-native'
import { colors } from '../../constants/style'

const navigation = {
  zIndex: 5,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: Platform.select({
    ios: 20,
    android: 0,
  }),
}

export default {
  centerTextContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerNavigation: {
    ...navigation,
    height: 80,
  },
  extendedHeaderNavigation: {
    ...navigation,
    height: 100,
  },
  headerNavigationImage: {
    height: 30,
    width: 30,
    opacity: 0.3,
  },
  headerNavigationButton: {
    width: 70,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerNavigationText: {
    alignSelf: 'stretch',
    color: colors.black,
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'center',
  },
  headerNavigationTextSubtitle: {
    textAlign: 'center',
    color: colors.grey,
    fontSize: 16,
  },
}
