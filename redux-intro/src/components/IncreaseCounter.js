import React, { Component } from 'react'
import {increaseCounter} from "../redux/actions/counterActions"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={e=>{
          this.props.dispatch(increaseCounter());
        }}> + 1 </button>
      </div>
    )
  }
}

function mapDispatchProps(dispatch){
  return {actions:bindActionCreators({increaseCounter},dispatch)}
}

export default connect(mapDispatchProps)(IncreaseCounter);