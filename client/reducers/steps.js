function steps (state = [], action){
  switch(action.type){
    case 'SET_STEPS':
      return action.data;
    case 'EDIT_STEP':
      return state.map(step => updateStep(step, action))
    case 'CLEAR_USERS_ON_STEP':
      return state.map(step => updateStep(step, action))
    case 'ASSIGN_USER_TO_STEP':
      return state.map(step => updateStep(step, action))
    default:
      return state;
  }
}

function updateStep (state, action) {
  switch(action.type){
    case 'EDIT_STEP':
      if (state.stepNumber !== (action.index + 1)) {
        return state;
      }
      return Object.assign({}, state, action.data);
      
    case 'ASSIGN_USER_TO_STEP':
      if (state.stepNumber !== (action.stepIndex.index+1)) {
        return state;
      } 
      if (state.role.users.indexOf(action.userID) === -1){
        let oldList = state.role.users;
        let newUser = [action.userID];
        let newList = oldList.concat(newUser);
        return Object.assign({}, state, {role: {users: newList}})
      }

    case 'CLEAR_USERS_ON_STEP':
      if (state.stepNumber !== (action.stepIndex.index+1)) {
        return state;
      }
      return Object.assign({}, state, {role: {users: []}})
    
    default:
      return state;
  }
}

export default steps; 