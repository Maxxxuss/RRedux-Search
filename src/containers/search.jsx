import { connect } from 'react-redux';
import Searchfield from '../components/search/searchApp'
import { initializeResources,receiveResult, indexResource, search } from '../redux/actions/search';
// import Selectors

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Notepad);

const mapDispatchToProps = (dispatch) => ({
    resourceNames: (resourceIndexes, resourceNames) => dispatch ()


})