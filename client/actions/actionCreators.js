export function setProcess(data){
  return {
    type: 'SET_PROCESS',
    data
  }
}

export function editProcess(data){
  return {
    type: 'EDIT_PROCESS',
    data
  }
}

export function setSteps(data){
  return {
    type: 'SET_STEPS',
    data
  }
}

export function setCurrentStep(step){
  return {
    type: 'SET_CURRENT_STEP',
    step
  }
}

export function editStep(data, index){
  return {
    type: 'EDIT_STEP',
    data, 
    index
  }
}

export function setUsers(users){
  return {
    type: 'SET_USERS',
    users
  }
}

export function assignUserToStep(userID, stepIndex){
  return {
    type: 'ASSIGN_USER_TO_STEP',
    userID,
    stepIndex,
  }
}

export function clearUsersOnStep(stepIndex){
  return {
    type: 'CLEAR_USERS_ON_STEP',
    stepIndex,
  }
}
