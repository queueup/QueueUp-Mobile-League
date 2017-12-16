import { buttons, colors, shadows, toast } from '../../constants/style'

export default {
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
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveButton: {
    ...buttons.defaultButton,
    flex: 3,
  },
  saveButtonText: {
    ...buttons.defaultButtonText,
  },
  ...toast,
}
