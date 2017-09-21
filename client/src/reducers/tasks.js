const tasks = ( state = [], action ) => {
  switch(action.type) {
    case 'TASKS':
      return action.tasks;
    case 'ADD_TASK':
      return [ action.task, ...state ]
    case 'UPDATE_TASK':
      return state.map( task => {
        if(task.id === action.task.id)
          return action.task
        return task
      })
    case 'DELELTE_TASK':
      return state.filter( task => task.id !== action.id)
    default:
      return state;
  }
}

export default tasks;
