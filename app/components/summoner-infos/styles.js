import { buttons, colors, shadows } from '../../constants/style'

export default {
  container: {
    alignSelf: 'stretch',
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
    textAlign: 'center',
    color: colors.red,
  },
  button: buttons.defaultButton,
  buttonText: buttons.defaultButtonText,
}
