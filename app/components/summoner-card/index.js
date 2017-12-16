import React from 'react'
import {
  Animated,
  Image,
  PanResponder,
  Text,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { style } from './style'
import {
  languages as languageImages,
  roles as roleImages,
  discordGrey,
  skypeGrey,
  teamspeakGrey,
} from '../../images'
import constantChampions from '../../constants/champions'
import { getDivisionImage, getWinrate } from '../../helpers/leagues'

import I18n from '../../i18n'

class SummonerCard extends React.Component {
  constructor(props) {
    super(props)

    this.opacity = new Animated.Value(0)
    this.offset = new Animated.ValueXY()
  }

  componentDidMount() {
    this.appear()
  }

  componentWillReceiveProps() {
    this.reset()
    this.appear()
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => null,
      onPanResponderMove: (evt, gestureState) => {
        this.offset.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        })
        this.opacity.setValue(1 - (Math.abs(gestureState.dx) / 380))
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (Math.abs(gestureState.dx) < 5 && Math.abs(gestureState.dy) < 5) {
          this.props.onPress()
        } else if (gestureState.dx > 100) {
          this.props.onAccept(() => this.reset())
        } else if (gestureState.dx < -100) {
          this.props.onDeny(() => this.reset())
        } else {
          Animated.spring(this.offset, {toValue: {x: 0, y: 0}}).start()
          Animated.spring(this.opacity, {toValue: 1}).start()
        }
      },
      onPanResponderTerminate: () => null,
      onShouldBlockNativeResponder: () => true,
    })
  }

  appear() {
    Animated.spring(this.opacity, {toValue: 1}).start()
  }

  reset() {
    this.offset.setValue({x: 0, y: 0})
    this.opacity.setValue(0)
    this.appear()
  }

  render() {
    const { summoner, queueType, communicationData } = this.props
    const { champions, locales, roles, rankedData } = summoner

    const interpolated0ffset = this.offset.x.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '2deg'],
    })

    const rank = rankedData.find(d => d.queueType === queueType)

    return (
      <Animated.View
        style={[
          {
            top: this.offset.y,
            left: this.offset.x,
            opacity: this.opacity,
            transform: [
              {
                rotateZ: interpolated0ffset,
              },
            ],
          },
          style.container,
        ]}
      >
        <Image
          source={getDivisionImage(rank)}
          style={style.rankImage}
        />
        <View style={style.card} {...this._panResponder.panHandlers}>
          <View style={style.rolesContainer}>
            {roles.map(r => <Image
              key={r}
              source={roleImages[r]}
              resizeMode='contain'
              style={style.roleImage}
            />)}
          </View>
          <View style={style.championsContainer}>
            {champions.map(c =>
              <Image
                key={c}
                source={constantChampions[c].image}
                resizeMode='contain'
                style={style.championImage}
              />)}
          </View>
          <View style={style.localesContainer}>
            {locales.map(l =>
              <Image
                key={l}
                source={languageImages[l]}
                resizeMode='contain'
                style={style.localeImage}
              />)}
          </View>
          <View style={style.communicationsContainer}>
            {communicationData.find(c => c.type === 'discord' && c.value)
              && <Image style={style.communicationImage} source={discordGrey} />}
            {communicationData.find(c => c.type === 'skype' && c.value)
              && <Image style={style.communicationImage} source={skypeGrey} />}
            {communicationData.find(c => c.type === 'teamspeak' && c.value)
              && <Image style={style.communicationImage} source={teamspeakGrey} />}
          </View>
          <View style={style.recapContainer}>
            <View style={style.recap}>
              <Text style={style.recapTitle}>{I18n.t('summonerCard_rank').toUpperCase()}</Text>
              <Text style={style.recapValue}>
                {rank
                  ? rank.tier[0].toUpperCase() + rank.rank.toUpperCase()
                  : '/'}
              </Text>
            </View>
            <View style={[style.recap, style.recapWithBorder]}>
              <Text style={style.recapTitle}>{I18n.t('summonerCard_winrate').toUpperCase()}</Text>
              <Text style={style.recapValue}>{getWinrate(rank)}</Text>
            </View>
          </View>
        </View>
      </Animated.View>
    )
  }
}

SummonerCard.propTypes = {
  communicationData: PropTypes.array,
  onAccept: PropTypes.func,
  onDeny: PropTypes.func,
  onPress: PropTypes.func,
  queueType: PropTypes.string,
  summoner: PropTypes.object,
}

SummonerCard.defaultProps = {
  communicationData: {},
  onAccept: () => null,
  onDeny: () => null,
  onPress: () => null,
  queueType: 'solo',
  summoner: {},
}

export default SummonerCard
