import React from 'react';
import { connect } from 'react-redux';
import { Header, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TaskView = ({ task = {} }) => (
  <Container>
    <Link to="/tasks">View All Tasks</Link>
    <Header as="h3" textAlign="center">{task.title}</Header>
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{task.description}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Status</Table.Cell>
          <Table.Cell>{task.status}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { task: state.tasks.find( t => t.id === parseInt(props.match.params.id, 0)) }
}

export default connect(mapStateToProps)(TaskView);
