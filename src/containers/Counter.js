import { connect } from 'react-redux'
import { addNum} from '../actions'
import { subtractNum } from '../actions'

import Visor from '../components/Visor'
import Control from '../components/Control'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.addNum
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(addNum(ownProps)),

  onKeyPress: () => dispatch(subtractNum(ownProps))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Visor, Control)
