import React from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import goals from '../../constants/goals'
import styles from './styles'

const GoalsPicker = ({ selectedGoals, onChange }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      {goals.map(g => {
        const selected = selectedGoals.find(goal => g.id === goal)
        return (
          <TouchableOpacity
            key={`${g.id}_${selected ? 'active' : 'inactive'}`}
            style={selected ? styles.activeGoalButton : styles.goalButton}
            onPress={() => {
              if (selected) {
                onChange(selectedGoals
                  .filter(goal => g.id !== goal))
              } else {
                onChange([
                  ...selectedGoals,
                  g.id,
                ])
              }
            }}
          >
            <View style={styles.goalButtonContent}>
              <Image source={g.image} style={styles.image} resizeMode="contain" />
              <Text style={styles.text}>{g.label}</Text>
            </View>
          </TouchableOpacity>
        )})}
    </View>
  </View>
)

GoalsPicker.propTypes = {
  onChange: PropTypes.func,
  selectedGoals: PropTypes.array,
}

GoalsPicker.defaultProps = {
  onChange: () => null,
  selectedGoals: [],
}

export default GoalsPicker
