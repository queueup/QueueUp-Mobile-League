import { buttons } from '../../constants/style'

export default {
  championsContainer: {
    paddingHorizontal: 20,
  },
  championsImage: {
    height: 50,
    width: 50,
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
