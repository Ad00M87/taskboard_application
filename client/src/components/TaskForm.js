import React from 'react';
import { Form } from 'semantic-ui-react';
import { addTask } from '../actions/tasks';
import { connect } from 'react-redux';

class TaskForm extends React.Component {
  state = { title: '', description: '', status: ''}

  newTask = () => {
    this.props.dispatch(addTask(this.state));
    this.setState({ title: '', description: '', status: '' })
    this.props.changeShow();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return(
    <Form
      style={{
        background: 'rgb(241, 120, 20)',
        padding: '15px',
        borderRadius: '15px'
      }}
    >
      <Form.Field>
        <label>Task</label>
        <input
          placeholder='Task'
          value={this.state.title}
          onChange={ (e) => this.handleChange(e)}
          name = 'title'
        />
      </Form.Field>
      <Form.TextArea
        label='Description'
        placeholder='Tell us more about the task...'
        value={this.state.description}
        onChange={ (e) => this.handleChange(e)}
        name = 'description'
      />
        <Form.Field>
          <label>Status</label>
          <input
            placeholder='To Do, In Progress, To Verify, or Completed'
            value={this.state.status}
            onChange={ (e) => this.handleChange(e)}
            name = 'status'
          />
        </Form.Field>
      <Form.Button onClick={this.newTask}>Submit</Form.Button>
      <Form.Button onClick={() => this.props.changeShow()}>Cancel</Form.Button>
    </Form>
    )
  }
}
export default connect()(TaskForm);
