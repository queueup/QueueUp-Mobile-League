import React from 'react'
import PropTypes from 'prop-types'
import {
  Image,
  Text,
  View,
} from 'react-native'
import {
  View as AnimatedView,
} from 'react-native-animatable'
import styles from '../styles'
import { getDivisionImage, getDivisionText, getWinrate } from '../../../helpers/leagues'
import queues from '../../../constants/queues'
import I18n from '../../../i18n'

export const Rank = ({ queueType, rankedData, delay }) => {
  const division = rankedData.find(d => d.queueType === queueType)
  return (
    <AnimatedView style={styles.rankContainer} animation="fadeInRight" delay={delay} duration={300} >
      <Text style={styles.rankQueue}>{queues.find(q => q.id === queueType).label}</Text>
      <View style={styles.rankDataContainer}>
        <Image source={getDivisionImage(division)} style={styles.rankImage} />
        <View style={styles.rankTextContainer}>
          <Text style={styles.rankName}>
            {getDivisionText(division)}
          </Text>
          <Text style={styles.rankWinrate}>{`${I18n.t('userDetails_ranksWinrate')}: ${getWinrate(division)}`}</Text>
        </View>
      </View>
    </AnimatedView>
  )
}

Rank.propTypes = {
  delay: PropTypes.number,
  queueType: PropTypes.string.isRequired,
  rankedData: PropTypes.array,
}

Rank.defaultProps = {
  delay: 0,
  rankedData: [],
}
