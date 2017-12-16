import { buttons } from '../../constants/style'

export default {
  championsContainer: {
    paddingHorizontal: 20,
  },
  championsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  championsImage: {
    height: 50,
    width: 50,
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
}
