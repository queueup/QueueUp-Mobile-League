import { colors } from '../../constants/style'

export default {
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  image: {
    height: 50,
    marginHorizontal: 20,
    resizeMode: 'contain',
    width: 50,
  },
  text: {
    color: colors.black,
    fontFamily: 'Roboto',
    fontSize: 16,
    marginHorizontal: 20,
  },
  policies: {
    color: colors.grey,
    fontSize: 12,
    marginHorizontal: 20,
    textAlign: 'center',
  },
}
