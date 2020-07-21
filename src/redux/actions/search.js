import { search as actionTypes } from './action-types.js';

// const searchFactory = () => {
//     const {printed, raw } = Function ()
//     return {
//         method, 
//         args, 
//         resourceName, 
//         resourceNames, 
//         text, 
//         result, 
//     }
// }




export const searchAPI = (method, args) => {
    return (...args) => ({
        type: actionTypes.searchAPI, 
        payload: {
            method,
            args
          }
    })
}


export const search = (resourceName, text) => {
    return {
      type: actionTypes.searchAction,
      payload: {
        api: performSearch(resourceName, text),
        action: {
          type: actionTypes.search,
          payload: {
            resourceName,
            text
        }
      }
    }
  }
}




export const createSearchAction = (resourceName, text) => {
      return {
        type: actionTypes.searchAction,
        payload: {
          api: performSearch(resourceName, text),
          action: {
            type: actionTypes.search,
            payload: {
              resourceName,
              text
          }
        }
      }
    }
  }

export const receiveResult = (resourceName, result) => {
    return {
      type: actionTypes.receiveResult,
      payload: {
        resourceName,
        result
    }
  }
}

export const initializeResources = (resourceNames) => {
  return {
    type: actionTypes.initializeResources,
    payload: {
      resourceNames
    }
  }
}

export const defineIndex = searchAPI('defineIndex')
export const indexResource = searchAPI('indexResource')
export const performSearch = searchAPI('performSearch')
