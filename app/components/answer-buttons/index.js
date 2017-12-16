import React from 'react'
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles.js'
import {
  icons,
} from '../../images'

const AnswerButtons = ({ onAccept, onDeny }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onDeny}  style={styles.button}>
      <Image source={icons.dislike} style={[styles.dislikeButtonImage, styles.buttonImage]} />
    </TouchableOpacity>
    <TouchableOpacity onPress={onAccept}  style={styles.button}>
      <Image source={icons.like} style={[styles.likeButtonImage, styles.buttonImage]} />
    </TouchableOpacity>
  </View>
)

AnswerButtons.propTypes = {
  onAccept: PropTypes.func,
  onDeny: PropTypes.func,
}

AnswerButtons.defaultProps = {
  onAccept: () => null,
  onDeny: () => null,
}

export default AnswerButtons
