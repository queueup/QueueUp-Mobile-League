import React from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import BackgroundView from '../background-view'

const SimplePage = ({ image, title, description, buttonText, buttonAction}) => (
  <BackgroundView>
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.description}>
        {description}
      </Text>
      {buttonText && buttonAction
        ? <TouchableOpacity
          onPress={buttonAction}
          style={styles.button}

        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        : null}
    </View>
  </BackgroundView>
)

SimplePage.propTypes = {
  buttonAction: PropTypes.func,
  buttonText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

SimplePage.defaultProps = {
  buttonAction: () => null,
  buttonText: '',
  description: '',
  image: '',
  title: '',
}

export default SimplePage
