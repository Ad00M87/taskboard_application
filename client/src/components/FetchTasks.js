import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Tasks from './Tasks';
import TaskView from './TaskView';
import { getTasks } from '../actions/tasks';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchTasks extends Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getTasks(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true })
  }

  render() {
    if(this.state.loaded) {
      return(
        <Segment>
          <Route exact path='/tasks' component={Tasks} />
          <Route exact path='/tasks/:id' component={TaskView} />
        </Segment>
      )
    } else {
      return(
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchTasks);
