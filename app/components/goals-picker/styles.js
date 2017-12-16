import { colors } from '../../constants/style'

export default {
  activeGoalButton: {
    opacity: 1,
  },
  container: {
    flexDirection: 'column',
  },
  goalButton: {
    opacity: 0.3,
  },
  goalButtonContent: {
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 50,
  },
  text: {
    color: colors.grey,
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    width: 160,
  },
}
