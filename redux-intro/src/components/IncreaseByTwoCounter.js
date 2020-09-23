import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {increaseByTwCounter} from "../redux/actions/counterActions"


class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(increaseByTwCounter())
                }}>
                    2 arttır
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseByTwCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);