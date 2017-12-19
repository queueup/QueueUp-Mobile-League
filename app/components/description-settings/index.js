import React from 'react'
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Toast from 'react-native-easy-toast'
import PropTypes from 'prop-types'
import styles from './styles'
import BackgroundView from '../background-view'
import NavigationBar from '../navigation-bar'
import { apiWrapper } from '../../utils'
import { colors } from '../../constants/style'
import I18n from '../../i18n'

class DescriptionSettings extends React.Component {
  onSubmit() {
    const { description } = this.props
    apiWrapper
      .updateLeagueProfile({
        description: description.trim(),
      })
      .then(() => Actions.pop())
  }

  render() {
    const { description, updateField } = this.props
    return (
      <BackgroundView>
        <View style={{flex: 1}}>
          <NavigationBar
            centerText={I18n.t('descriptionSettings_title')}
            hideRight
          />
          <TextInput
            ref="description"
            placeholder={I18n.t('descriptionSettings_descriptionPlaceholder')}
            onChangeText={t => updateField(t)}
            value={description}
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor={colors.placeholderGrey}
            autoCorrect
            spellCheck
            multiline
            onSubmitEditing={() => this.onSubmit()}
            returnKeyType="done"
          />
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => this.onSubmit()}
              style={styles.saveButton}
            >
              <Text style={styles.saveButtonText}>{I18n.t('global_save')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BackgroundView>
    )
  }
}
DescriptionSettings.propTypes = {
  description: PropTypes.string,
  updateField: PropTypes.func,
}

DescriptionSettings.defaultProps = {
  description: '',
  updateField: () => null,
}

export default DescriptionSettings
