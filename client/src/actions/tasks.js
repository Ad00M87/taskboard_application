import axios from 'axios';

export const getTasks = (callback) => {
  return(dispatch) => {
    axios.get('/api/tasks')
      .then( res => dispatch({ type: 'TASKS', tasks: res.data}))
      .then( callback() )
  }
}

export const addTask = (task) => {
  return(dispatch) => {
    axios.post('api/tasks', {task})
      .then( res => dispatch({ type: 'ADD_TASK', task: res.data}))
  }
}

export const updateTask = (task) => {
  return(dispatch) => {
    axios.put(`/api/tasks/${task.id}`, {task})
      .then( res => dispatch({ type: 'UPDATE_TASK', task: res.data}))
  }
}

export const deleteTask = (id) => {
  return(dispatch) => {
    axios.delete(`/api/tasks/${id}`)
      .then( () => dispatch({ type: 'DELELTE_TASK', id}))
  }
}
