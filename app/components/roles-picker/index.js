import React from 'react'
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import roles from '../../constants/roles'
import styles from './styles'

const RolesPicker = ({ selectedRoles, onChange }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      {roles.slice(0, 3).map(r => {
        const selected = selectedRoles.find(role => r.id === role)
        return (
          <TouchableOpacity
            key={`${r.id}_${selected ? 'active' : 'inactive'}`}
            style={selected ? styles.activeRoleButton : styles.roleButton}
            onPress={() => {
              if (selected) {
                onChange(selectedRoles.filter(role => r.id !== role))
              } else {
                onChange([
                  ...selectedRoles,
                  r.id,
                ])
              }
            }}
          >
            <Image source={r.image} style={styles.image} resizeMode="contain" />
          </TouchableOpacity>
        )
      })}
    </View>
    <View style={styles.row}>
      {roles.slice(3, 5).map(r => {
        const selected = selectedRoles.find(role => r.id === role)
        return (
          <TouchableOpacity
            key={`${r.id}_${selected ? 'active' : 'inactive'}`}
            style={selected ? styles.activeRoleButton : styles.roleButton}
            onPress={() => {
              if (selected) {
                onChange(selectedRoles.filter(role => r.id !== role))
              } else {
                onChange([
                  ...selectedRoles,
                  r.id,
                ])
              }
            }}
          >
            <Image source={r.image} style={styles.image} resizeMode="contain" />
          </TouchableOpacity>
        )
      })}
    </View>
  </View>
)

RolesPicker.propTypes = {
  onChange: PropTypes.func,
  selectedRoles: PropTypes.array,
}

RolesPicker.defaultProps = {
  onChange: () => null,
  selectedRoles: [],
}

export default RolesPicker
