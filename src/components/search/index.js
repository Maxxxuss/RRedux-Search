/* @flow */
import {
  defaultSearchStateSelector,
  getSearchSelectors
} from './selectors'
// import { search } from './actions'
import {search, createSearchAction} from '../../redux/actions/search'
import reduxSearch from './reduxSearch'
import SearchApi from './SearchApi'

export default reduxSearch
export {
  defaultSearchStateSelector,
  getSearchSelectors,
  reduxSearch,
  search, 
  createSearchAction,
  SearchApi
}
export { INDEX_MODES } from 'js-worker-search'
