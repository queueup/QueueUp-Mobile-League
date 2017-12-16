import { colors } from '../../constants/style'

const height = 60

export default {
  activeNavigationPoint: {
    opacity: 1,
  },
  button: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    height,
    justifyContent: 'space-between',
    left: 0,
    paddingHorizontal: 20,
    position: 'absolute',
    right: 0,
  },
  lightContainer: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    height,
    justifyContent: 'space-between',
    left: 0,
    paddingHorizontal: 20,
    position: 'absolute',
    right: 0,
  },
  leftButton: {
    justifyContent: 'flex-start',
  },
  navigationPoint: {
    backgroundColor: colors.white,
    borderRadius: 5,
    height: 10,
    marginHorizontal: 5,
    opacity: 0.3,
    width: 10,
  },
  navigationState: {
    flexDirection: 'row',
  },
  rightArrow: {
    height: 12,
    marginLeft: 5,
    resizeMode: 'contain',
    width: 12,
  },
  rightButton: {
    justifyContent: 'flex-end',
  },
  rightButtonText: {
    flex: 1,
    fontWeight: '500',
    textAlign: 'right',
  },
  rightButtonTextLight: {
    color: colors.grey,
    fontWeight: '500',
    textAlign: 'right',
  },
}
