import React from 'react'
import {
  Keyboard,
  Text,
  TextInput,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import { colors } from '../../constants/style'
import Select from '../select'

import I18n from '../../i18n'

const SummonerInfos = ({ summonerName, region, updateField, regions, errors }) => (
  <View style={styles.container}>
    <TextInput
      placeholder={I18n.t('summonerInfos_summonerName')}
      onChangeText={t => updateField('summonerName', t)}
      value={summonerName}
      style={[
        styles.input,
        errors.summonerName ? styles.inputWithError : {},
      ]}
      underlineColorAndroid="transparent"
      placeholderTextColor={colors.placeholderGrey}
      autoCapitalize="none"
      autoCorrect={false}
      autoFocus
      onSubmitEditing={() => Keyboard.dismiss()}
      returnKeyType="next"
    />
    {errors.summonerName && <Text style={styles.inputErrorText}>{errors.summonerName}</Text>}
    <Select
      placeholder={I18n.t('summonerInfos_region')}
      items={regions}
      selectedItem={region}
      onChange={(v) => updateField('region', v)}
      errors={errors.region}
    />
  </View>
)

SummonerInfos.propTypes = {
  errors: PropTypes.object,
  region: PropTypes.object,
  regions: PropTypes.array,
  summonerName: PropTypes.string,
  updateField: PropTypes.func,
}

SummonerInfos.defaultProps = {
  errors: {},
  region: {},
  regions: [],
  summonerName: '',
  updateField: () => null,
}

export default SummonerInfos
