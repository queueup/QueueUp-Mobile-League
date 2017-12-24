import { buttons, colors } from '../../constants/style'

export default {
  emptyStateButton: {
    ...buttons.defaultButton,
  },
  emptyStateButtonText: {
    ...buttons.defaultButtonText,
  },
  emptyStateContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  emptyStateImage: {
    height: 200,
  },
  emptyStateSubtitle: {
    color: colors.grey,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  emptyStateTitle: {
    color: colors.black,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
}
