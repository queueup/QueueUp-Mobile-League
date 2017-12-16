import { buttons, colors } from '../../constants/style'

export default {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 120,
    width: 120,
  },
  title: {
    fontFamily: 'Roboto',
    color: colors.black,
    fontWeight: '500',
    fontSize: 36,
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  description: {
    fontFamily: 'Roboto',
    color: colors.grey,
    fontWeight: '300',
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  button: buttons.defaultButton,
  buttonText: buttons.defaultButtonText,
}
