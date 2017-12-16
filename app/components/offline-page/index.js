import React from 'react'
import { lightnings } from '../../images'
import SimplePage from '../simple-page'

const OfflinePage = () => (
  <SimplePage
    image={lightnings}
    title="You're offline"
    description={'QueueUp needs an internet\nconnection to work properly.'}
  />
)

OfflinePage.propTypes = {}

OfflinePage.defaultProps = {}

export default OfflinePage
