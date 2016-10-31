function currentStep (state = [], action){
  switch(action.type){
    case 'SET_CURRENT_STEP':
      return Object.assign({}, state, {index: action.step.index});
    default:
      return state;
  }
}

export default currentStep; 