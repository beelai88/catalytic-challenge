import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './main/main.jsx';

function mapStateToProps (state) {
  return {
    process: state.process, 
    steps: state.steps,
    currentStep: state.currentStep,
    users: state.users
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App; 