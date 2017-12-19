import { buttons, colors, shadows, toast } from '../../constants/style'

export default {
  input: {
    alignSelf: 'stretch',
    fontSize: 14,
    minHeight: 100,
    marginHorizontal: 50,
    borderRadius: 4,
    backgroundColor: colors.white,
    marginVertical: 10,
    padding: 20,
    paddingTop: 20,
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
