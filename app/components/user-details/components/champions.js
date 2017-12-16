import React from 'react'
import {
  Image,
} from 'react-native'
import {
  View as AnimatedView,
} from 'react-native-animatable'
import PropTypes from 'prop-types'
import constantChampions from '../../../constants/champions'
import styles from '../styles'

export const Champions = ({champions}) => (
  <AnimatedView style={styles.championsContainer} animation="fadeInRight" delay={600} duration={300}>
    {champions.map(r =>
      <Image
        key={r}
        source={constantChampions[r].image}
        style={styles.championImage}
        resizeMode="contain"
      />
    )}
  </AnimatedView>
)

Champions.propTypes = {
  champions: PropTypes.array,
}

Champions.defaultProps = {
  champions: [],
}
