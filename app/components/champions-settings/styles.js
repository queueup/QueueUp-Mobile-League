import { buttons, colors, toast } from '../../constants/style'

export default {
  ...toast,
  championsContainer: {
    paddingHorizontal: 20,
  },
  championsImage: {
    height: 50,
    width: 50,
  },
  championsFull: {
    color: colors.red,
  },
  championsLength: {
    fontSize: 18,
    fontWeight: '500',
  },
  championsWarning: {
    color: colors.orange,
  },
  championsRow: {
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
