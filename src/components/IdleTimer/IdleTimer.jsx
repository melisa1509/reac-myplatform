import React from "react";
import IdleTimer from 'react-idle-timer'
import { connect } from "react-redux";
import { translate } from 'react-switch-lang';




class IdleTimerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    this.idleTimer = null
    this.handleOnAction = this.handleOnAction.bind(this)
    this.handleOnActive = this.handleOnActive.bind(this)
    this.handleOnIdle = this.handleOnIdle.bind(this)
  }

  handleOnAction (event) {
    console.log('user did something', event)
  }

  handleOnActive (event) {
    console.log('user is active', event)
    console.log('time remaining', this.idleTimer.getRemainingTime())
  }

  handleOnIdle (event) {
    console.log('user is idle', event)
    console.log('last active', this.idleTimer.getLastActiveTime())
  }

 
  render() {
    const { group_list, loading } = this.props;
    let { t } = this.props;
     
    return (
          <IdleTimer
            ref={ref => { this.idleTimer = ref }}
            timeout={1000 * 60 }
            onActive={this.handleOnActive}
            onIdle={this.handleOnIdle}
            onAction={this.handleOnAction}
            debounce={250}
          />
      )
  }
}

const mapStateToProps = state => ({ 
      idle_timer_modal: state.generalReducer.idle_timer_modal, 
});

const mapDispatchToPropsActions = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(translate(IdleTimerComponent));

