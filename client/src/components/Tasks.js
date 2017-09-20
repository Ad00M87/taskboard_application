import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateTask, deleteTask } from '../actions/tasks';
import { Container, Grid, Header, Card, Dropdown, Divider, Button } from 'semantic-ui-react';

class Tasks extends React.Component {
  state = { status: ''}

  statusOptions = () => {
    return this.props.status.map( (status, index) => {
      return { key: index, text: status, value: status }
    })
  }

  clearFilter = () => {
    this.setState({ status: '' })
  }

  tasks = () => {
    const { tasks } = this.props;
    const { status } = this.state;
    let visable = tasks;
    if (status)
      visable = tasks.filter( task => task.status === status )

    return visable.map( task => {
      return(
        <Grid.Column key={task.id} computer={4} mobile={16} tablet={8}>
          <Card style={styles.taskCard}>
            <Card.Content>
              <Card.Header>{task.title}</Card.Header>
              <Card.Meta>
                <span>Staus: {task.status}</span>
              </Card.Meta>
              <Card.Description>
                {task.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to={`/tasks/${task.id}`}>View Task</Link>
            </Card.Content>
          </Card>
          <Button
            style={styles.buttons}
            color="orange">
            Edit Task
          </Button>
          <Button
            style={styles.buttons}
            color="red"
            onClick={ () => this.props.dispatch(deleteTask(task.id))}>
            Delete Task
          </Button>
        </Grid.Column>
      )
    })
  }

  render() {
    let { status } = this.state;
    return(
      <Container>
        <Header as='h3' textAlign='center'>Tasks</Header>
        <Dropdown
          placeholder='Filter Tasks By Status'
          fluid
          selection
          options={this.statusOptions()}
          value={status}
          onChange={ (e, data) => this.setState({ status: data.value })}
        />
        <Divider />
        { status && <div><Button fluid basic onClick={this.clearFilter}>Clear Filter</Button><Divider /></div>}
        <Grid columns={16}>
          <Grid.Row>
            { this.tasks() }
          </Grid.Row>
        </Grid>
      </Container>
    )
  }

}

const styles = {
  taskCard: {
    height: '200px',
    marginBottom: '10px',
  },
  buttons: {
    marginBottom: '10px',
  },
}

const mapStateToProps = (state) => {
  const tasks = state.tasks;
  const status = [ ...new Set(tasks.map( task => task.status))]
  return { tasks, status };
}

export default connect(mapStateToProps)(Tasks);
