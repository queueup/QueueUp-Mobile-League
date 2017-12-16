import { buttons, colors, shadows } from '../../constants/style'

export default {
  communicationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 40,
    marginHorizontal: 20,
    width: 40,
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    borderRadius: 4,
    flex: 1,
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    ...shadows.basicShadow,
  },
  saveButton: {
    ...buttons.defaultButton,
    flex: 3,
  },
  saveButtonText: {
    ...buttons.defaultButtonText,
  },
}
