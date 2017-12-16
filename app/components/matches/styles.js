import { colors } from '../../constants/style'

export default {
  listItem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  listItemArrow: {
    height: 30,
    opacity: 0.3,
    width: 30,
  },
  listItemContent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  listItemImage: {
    height: 80,
    width: 80,
  },
  listItemTextContainer: {
    flex: 1,
  },
  listItemSubtitle: {
    color: colors.grey,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '300',
  },
  listItemTitle: {
    color: colors.black,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    width: 200,
  },
}
