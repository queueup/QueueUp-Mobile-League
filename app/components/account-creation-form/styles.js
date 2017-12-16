import { buttons, colors } from '../../constants/style'

export default {
  button: buttons.defaultButton,
  buttonText: buttons.defaultButtonText,
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 60,
    paddingTop: 20,
  },
  description: {
    color: colors.grey,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '300',
    marginHorizontal: 20,
    textAlign: 'center',
  },
  image: {
    height: 120,
    width: 120,
  },
  inputErrorText: {
    color: colors.red,
    textAlign: 'center',
  },
  title: {
    color: colors.black,
    fontFamily: 'Roboto',
    fontSize: 36,
    fontWeight: '500',
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
}
