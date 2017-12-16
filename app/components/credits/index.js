import React from 'react'
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'
import BackgroundView from '../background-view'
import NavigationBar from '../navigation-bar'

import {
  languages,
  discord,
  icons,
  knight,
} from '../../images'

const Credits = () => (
  <BackgroundView>
    <NavigationBar
      centerText="Credits"
    />
    <ScrollView style={{flex: 1}}>
      <Text style={[styles.text, { textAlign: 'center'}]}>
        Huge thanks to Clorces, NightSorrow and ThreePounds for their contribution to QueueUp.
        Translations wouldn't have been possible without them.
      </Text>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.flaticon.com/authors/gregor-cresnar')}
        style={styles.container}
      >
        <Image source={icons.star} style={styles.image} />
        <Text style={styles.text}>
          Icons made by Gregor Cresnar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.freepik.com/')}
        style={styles.container}
      >
        <View style={{flexDirection: 'row'}}>
          <Image source={knight} style={styles.image} />
          <Image source={languages.fr_FR} style={styles.image} />
        </View>
        <Text style={styles.text}>
          Icons made by Freepik
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://discord.gg/Zk2fsnN')}
        style={styles.container}
      >
        <Image source={discord} style={styles.image} />
        <Text style={styles.text}>
          Join us on Discord !
        </Text>
      </TouchableOpacity>
      <Text style={styles.policies}>
        "QueueUp" isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games
        or anyone officially involved in producing or managing League of Legends. League of Legends and
        Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot
        Games, Inc.
      </Text>
    </ScrollView>
  </BackgroundView>
)

export default Credits
