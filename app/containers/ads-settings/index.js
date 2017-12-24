import { connect } from 'react-redux'
import { updateField } from '../../actions/settings'
import Settings from '../../components/ads-settings'

const mapStateToProps = ({settings: { ads }}) => ({
  ads,
})

const mapDispatchToProps = dispatch => ({
  setAds: ad => dispatch(updateField('ads', ad)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
