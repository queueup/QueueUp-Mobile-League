import React from 'react'
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import Toast from 'react-native-easy-toast'
import { Actions } from 'react-native-router-flux'
import {
  Text as AnimatedText,
} from 'react-native-animatable'
import {
  Champions,
  Communication,
  Locales,
  Rank,
  Roles,
} from './components'
import styles from './styles'
import {
  icons,
} from '../../images'
import I18n from '../../i18n'
import { apiWrapper } from '../../utils'

class UserDetails extends React.Component {
  render() {
    const { own, selectedUser: {leagueProfile, communicationData}, displayUser } = this.props
    return (
      <View style={styles.container}>
        <Toast
          ref="toast"
          style={styles.toast}
          textStyle={styles.toastText}
        />
        <TouchableOpacity
          onPress={() => Actions.pop()}
          style={styles.closeButtonContainer}
        >
          <Image source={icons.cancel} style={styles.closeButton} />
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.scrollContainer}>
            <AnimatedText style={styles.sectionTitle} animation="fadeInRight" delay={0} duration={300}>
              {I18n.t('userDetails_ranksTitle')}
            </AnimatedText>
            <Rank
              rankedData={leagueProfile.rankedData}
              queueType="RANKED_SOLO_5x5"
              delay={50}
            />
            <Rank
              rankedData={leagueProfile.rankedData}
              queueType="RANKED_FLEX_SR"
              delay={100}
            />
            <Rank
              rankedData={leagueProfile.rankedData}
              queueType="RANKED_TEAM_3x3"
              delay={150}
            />
            <AnimatedText style={styles.sectionTitle} animation="fadeInRight" delay={400} duration={300}>
              {I18n.t('userDetails_favoriteRolesTitle')}
            </AnimatedText>
            <Roles roles={leagueProfile.roles} />
            <AnimatedText style={styles.sectionTitle} animation="fadeInRight" delay={600} duration={300}>
              {I18n.t('userDetails_favoriteChampionsTitle')}
            </AnimatedText>
            <Champions champions={leagueProfile.champions} />
            <AnimatedText style={styles.sectionTitle} animation="fadeInRight" delay={800} duration={300}>
              {I18n.t('userDetails_localesTitle')}
            </AnimatedText>
            <Locales locales={leagueProfile.locales} />
            <AnimatedText style={styles.sectionTitle} animation="fadeInRight" delay={1000} duration={300}>
              {I18n.t('userDetails_communicationTitle')}
            </AnimatedText>
            <Communication data={communicationData} />
            {own
              ? <TouchableOpacity
                onPress={() => apiWrapper
                  .updateLeagueRankedData()
                  .then(() => {
                    this.refs.toast.show(I18n.t('userDetails_profileUpdated'))
                    apiWrapper
                      .getProfilePreview()
                      .then(r => displayUser(r.data))
                  })
                }
              >
                <Text style={{textAlign: 'center'}}>{I18n.t('userDetails_update')}</Text>
              </TouchableOpacity>
              : null}
          </View>
        </ScrollView>
      </View>
    )
  }
}

UserDetails.propTypes = {
  displayUser: PropTypes.func,
  own: PropTypes.bool,
  selectedUser: PropTypes.object,
}

UserDetails.defaultProps = {
  selectedUser: {},
  own: false,
  displayUser: () => null,
}

export default UserDetails
