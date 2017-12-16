import { buttons, colors } from '../../constants/style'

export default {
  localesContainer: {
    paddingHorizontal: 20,
  },
  localesImage: {
    height: 50,
    width: 50,
  },
  localesFull: {
    color: colors.red,
  },
  localesLength: {
    fontSize: 18,
    fontWeight: '500',
  },
  localesWarning: {
    color: colors.orange,
  },
  localesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  saveButton: {
    ...buttons.defaultButton,
    flex: 3,
  },
  saveButtonText: {
    ...buttons.defaultButtonText,
  },
}
