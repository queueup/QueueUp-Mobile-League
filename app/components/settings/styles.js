import { colors } from '../../constants/style'

export default {
  listHeader: {
    fontSize: 18,
    color: colors.grey,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  listItem: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemData: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemImage: {
    height: 30,
    width: 30,
    opacity: 0.1,
    marginHorizontal: 20,
  },
  listItemText: {
    flex: 1,
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
  },
  listItemArrow: {
    height: 30,
    width: 30,
    opacity: 0.3,
    marginHorizontal: 20,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialImage: {
    margin: 10,
    height: 50,
    width: 50,
  },
}
