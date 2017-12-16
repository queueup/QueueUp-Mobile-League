import { colors, shadows } from '../../constants/style'

export default {
  selectContainerCollapsed: {
    height: 50,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 50,
    borderRadius: 4,
    backgroundColor: colors.white,
    marginVertical: 10,
    paddingHorizontal: 20,
    ...shadows.basicShadow,
  },
  selectContainerCollapsedWithErrors: {
    ...shadows.errorShadow,
  },
  selectContainer: {
    height: 250,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 50,
    borderRadius: 4,
    backgroundColor: colors.white,
    marginVertical: 10,
    ...shadows.basicShadow,
  },
  selectedItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputErrorText: {
    textAlign: 'center',
    color: colors.red,
  },
  caret: {
    color: colors.grey,
    fontSize: 12,
  },
  selectedItem: {
    fontSize: 20,
  },
  placeholder: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: colors.placeholderGrey,
  },
  listItem: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: colors.grey,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  listItemSelected: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: colors.black,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
}
