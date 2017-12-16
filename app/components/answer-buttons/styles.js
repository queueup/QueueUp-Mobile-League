import {
  colors,
  shadows,
} from '../../constants/style'

export default {
  button: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 35,
    height: 70,
    justifyContent: 'center',
    width: 70,
    ...shadows.basicShadow,
  },
  buttonImage: {
    height: 30,
    resizeMode: 'contain',
    width: 30,
  },
  container: {
    alignItems: 'center',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    left: 0,
    paddingHorizontal: 40,
    position: 'absolute',
    right: 0,
  },
  dislikeButtonImage: {
    marginTop: 5,
  },
  likeButtonImage: {
    marginTop: -5,
  },
}
