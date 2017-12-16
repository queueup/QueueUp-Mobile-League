import React from 'react'
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Config from 'react-native-config'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'
import { AdMobBanner } from 'react-native-admob'
import styles from './styles'
import I18n from '../../i18n'
import BackgroundView from '../background-view'
import EmptyState from '../empty-state'
import NavigationBar from '../navigation-bar'
import { icons, sleepingPoro } from '../../images'
import { getDivisionImage } from '../../helpers/leagues'
import { apiWrapper } from '../../utils'

const renderItem = ({ item }, {setMatch, favoriteQueue, setMessages}) => {
  const division = item.leagueProfile.rankedData.find(i => i.queueType === favoriteQueue.id)
  return (
    <TouchableOpacity
      onPress={() => {
        apiWrapper
          .getMessages(item.id)
          .then(r => setMessages(r.data))
        setMatch(item)
        Actions.chat()
      }}
    >
      <View style={styles.listItem}>
        <View style={styles.listItemContent}>
          <Image source={getDivisionImage(division)} style={styles.listItemImage} />
          <View style={styles.listItemTextContainer}>
            <Text style={styles.listItemTitle}>{item.leagueProfile.summonerName}</Text>
            <Text style={styles.listItemSubtitle} numberOfLines={1}>
              {item.lastMessage
                ? item.lastMessage.content
                : I18n.t('matches_newMatch')
              }
            </Text>
          </View>
        </View>
        <Image source={icons.rightArrow} style={styles.listItemArrow} resizeMode="contain"/>
      </View>
    </TouchableOpacity>
  )
}

renderItem.propTypes = {
  item: PropTypes.object.isRequired,
}

const renderSeparator = () => (
  <View style={styles.separator}/>
)

class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      refreshing: false,
    }
  }

  componentDidMount() {
    this.onRefresh()
  }

  onRefresh() {
    this.setState({
      refreshing: true,
    }, () =>
      apiWrapper
        .getMatches()
        .then(r => {
          this.props.setMatches(r.data)
          this.setState({
            refreshing: false,
          })
        })
        .catch(() => this.setState({
          refreshing: false,
        }))
    )
  }

  render() {
    const { ads, matches, setMatch, favoriteQueue, setMessages } = this.props
    return (
      <BackgroundView>
        <View style={{flex: 1}}>
          <NavigationBar
            centerText="Matches"
            hideRight
          />
          {matches.length > 0
            ? <FlatList
              data={matches}
              renderItem={i => renderItem(i, {favoriteQueue, setMatch, setMessages})}
              keyExtractor={i => i.id}
              ItemSeparatorComponent={renderSeparator}
              refreshing={this.state.refreshing}
              onRefresh={() => this.onRefresh()}
            />
            : <EmptyState
              image={sleepingPoro}
              title={I18n.t('matches_emptyTitle')}
              subtitle={I18n.t('matches_emptySubtitle')}
            />
          }
          {ads
            && <AdMobBanner
              adSize="smartBannerPortrait"
              adUnitID={Config.ADMOB_CHAT_UNIT_ID}
            />}
        </View>
      </BackgroundView>
    )
  }
}

Chat.propTypes = {
  ads: PropTypes.bool,
  favoriteQueue: PropTypes.object,
  matches: PropTypes.array,
  setMatch: PropTypes.func,
  setMatches: PropTypes.func,
  setMessages: PropTypes.func,
}

Chat.defaultProps = {
  ads: true,
  favoriteQueue: '',
  matches: [],
  setMatch: () => null,
  setMatches: () => null,
  setMessages: () => null,
}

export default Chat
