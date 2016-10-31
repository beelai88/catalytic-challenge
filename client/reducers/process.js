function process (state = [], action){
  switch(action.type){
    case 'SET_PROCESS':
      return action.data;
    case 'EDIT_PROCESS':
      return Object.assign({}, state, action.data)
    default:
      return state;
  }
}

export default process; 