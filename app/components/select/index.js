import React from 'react'
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

class Select extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: true,
    }
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { selectedItem, items, placeholder, onChange, errors } = this.props
    return this.state.collapsed
      ? (
        <View>
          <TouchableOpacity
            style={[
              styles.selectContainerCollapsed,
              errors ? styles.selectContainerCollapsedWithErrors : {},
            ]}
            onPress={() => this.toggle()} >
            <View style={styles.selectedItemContainer}>
              <Text style={selectedItem ? styles.selectedItem : styles.placeholder}>{selectedItem ? selectedItem.label : placeholder}</Text>
              <Text style={styles.caret}>▼</Text>
            </View>
          </TouchableOpacity>
          {errors && typeof errors === 'string' && <Text style={styles.inputErrorText}>{errors}</Text>}
        </View>
      )
      : (
        <View  style={styles.selectContainer}>
          <ScrollView>
            {items.map((i, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => {
                  this.toggle()
                  onChange(i)
                }}
              >
                <Text style={selectedItem === i
                  ? styles.listItemSelected
                  : styles.listItem}
                >
                  {i.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )
  }
}

Select.propTypes = {
  errors: PropTypes.object,
  onChange: PropTypes.func,
  items: PropTypes.array,
  placeholder: PropTypes.string,
  selectedItem: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
}

Select.defaultProps = {
  errors: {},
  onChange: () => null,
  items: [],
  placeholder: '',
  selectedItem: {},
}

export default Select
