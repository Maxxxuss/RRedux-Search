import { createSelector } from 'reselect'


import faker from 'faker'
import Immutable from 'immutable'
import keymirror from 'keymirror'
import { search } from '../actions/action-types';



export const getSearchData = state => state.searchData;


export const getSearchList = createSelector (
    getSearchData, 
    searchData => searchData.map(search => ({
        id: search.id, 
        name: search.name,
        titel: search.titel,  

    }))
)

export const clearData = createSelector (
    searchData => searchData
)


export const State = Immutable.Record({
    map: Immutable.OrderedMap(),
    immutableMap: Immutable.OrderedMap()
  })
  
  export const ACTION_TYPES = keymirror({
    CLEAR_DATA: null,
    CLEAR_IMMUTABLE_DATA: null,
    SET_DATA: null,
    SET_IMMUTABLE_DATA: null
  })
  
  // Immutable Data attributes must be accessible as getters
  const Record = Immutable.Record({
    id: null,
    name: null,
    title: null
  })

  
  export const actions = {
    clearData: () => ({ type: ACTION_TYPES.CLEAR_DATA }),
    clearImmutableData: () => ({ type: ACTION_TYPES.CLEAR_IMMUTABLE_DATA }),
  
    generateData () {
      return (dispatch, getState) => {
        dispatch(actions.clearData())
        const data = {}
        for (var i = 0; i < 10; i++) {
          let id = faker.random.uuid()
          data[id] = {
            id: id,
            name: faker.name.findName(),
            title: faker.name.title()
          }
        }
        dispatch({
          type: ACTION_TYPES.SET_DATA,
          payload: data
        })
      }
    },
  
    generateImmutableData () {
      return (dispatch, getState) => {
        dispatch(actions.clearImmutableData())
        const immutableMap = {}
        for (var i = 0; i < 10; i++) {
          let id = faker.random.uuid()
          immutableMap[id] = new Record({
            id: id,
            name: faker.name.findName(),
            title: faker.name.title()
          })
        }
        dispatch({
          type: ACTION_TYPES.SET_IMMUTABLE_DATA,
          payload: Immutable.Map(immutableMap)
        })
      }
    },
  
    searchData: createSearchAction('map'),
    searchImmutableData: createSearchAction('immutableMap')
  }
  
  export const actionHandlers = {
    [ACTION_TYPES.CLEAR_DATA] (state) {
      return state.set('map', {})
    },
    [ACTION_TYPES.CLEAR_IMMUTABLE_DATA] (state) {
      return state.set('immutableMap', Immutable.Map())
    },
    [ACTION_TYPES.SET_DATA] (state, { payload }): State {
      return state.set('map', payload)
    },
    [ACTION_TYPES.SET_IMMUTABLE_DATA] (state, { payload }): State {
      return state.set('immutableMap', payload)
    }
  }
  
  export const resources = state => state.resources
  export const resourceSelector = (resourceName, state) => state.resources.get(resourceName)
  export const map = createSelector([resources], resources => resources.map)
  export const immutableMap = createSelector([resources], resources => resources.immutableMap)
  
  const selectors = getSearchSelectors({ resourceName: 'map', resourceSelector })
  export const dataSearchText = selectors.text
  export const filteredIdArray = selectors.result
  
  const immutableSelectors = getSearchSelectors({ resourceName: 'immutableMap', resourceSelector })
  export const immutableDataSearchText = immutableSelectors.text
  export const filteredIdList = createSelector([immutableSelectors.result], result => Immutable.List(result))
  
  
  // export function reducer (state = new State(), action: Object): State {
  export const reducer = (state = new State(), action)=> {
  
    const { type } = action
    if (type in actionHandlers) {
      return actionHandlers[type](state, action)
    } else {
      return state
    }
  }
  