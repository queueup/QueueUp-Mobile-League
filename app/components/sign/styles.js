import { buttons, colors, shadows } from '../../constants/style'

export default {
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
  },
  navigationContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 50,
    marginHorizontal: 50,
  },
  activeNavigation: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: colors.blue,
    fontWeight: '600',
  },
  inactiveNavigation: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: colors.blue,
    fontWeight: '500',
    opacity: 0.3,
  },
  input: {
    height: 50,
    alignSelf: 'stretch',
    marginHorizontal: 50,
    borderRadius: 4,
    backgroundColor: colors.white,
    marginVertical: 10,
    paddingHorizontal: 20,
    ...shadows.basicShadow,
  },
  inputWithError: {
    fontFamily: 'Roboto',
    fontSize: 16,
    ...shadows.errorShadow,
  },
  inputErrorText: {
    color: colors.red,
  },
  button: buttons.defaultButton,
  buttonText: buttons.defaultButtonText,
}
