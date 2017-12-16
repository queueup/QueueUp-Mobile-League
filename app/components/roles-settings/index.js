import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'
import styles from './styles'
import BackgroundView from '../background-view'
import NavigationBar from '../navigation-bar'
import RolesPicker from '../roles-picker'

import I18n from '../../i18n'
import { apiWrapper } from '../../utils'

class RolesSettings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      roles: props.selectedRoles,
    }
  }

  render() {
    const { setRoles } = this.props
    const { roles } = this.state
    return (
      <BackgroundView>
        <View style={{flex: 1}}>
          <NavigationBar
            centerText={I18n.t('rolesSettings_title')}
            centerTextSubtitle={I18n.t('rolesSettings_subtitle')}
            extended
            hideRight
          />
          <RolesPicker
            selectedRoles={roles}
            onChange={roles => this.setState({roles})}
          />
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => {
                apiWrapper
                  .updateLeagueProfile({roles})
                  .then(() => setRoles(roles))
                Actions.pop()
              }}
              style={styles.saveButton}
            >
              <Text style={styles.saveButtonText}>
                {I18n.t('global_save')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BackgroundView>
    )
  }
}

RolesSettings.propTypes = {
  selectedRoles: PropTypes.array,
  setRoles: PropTypes.func,
}

RolesSettings.defaultProps = {
  selectedRoles: [],
  setRoles: () => null,
}

export default RolesSettings
