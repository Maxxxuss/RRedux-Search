import { initializeResources } from "redux-search/dist/commonjs/actions";

export const notes = {
    addNote: 'notes/addNote',
    deleteNote: 'notes/deleteNote',
    updateNoteContent: 'notes/updateNoteContent',
    setActiveNote: 'notes/setActiveNote',
};

export const tabs = {
    setActiveTab: 'tabs/setActiveTab',
};



export const search ={
    searchAPI: '@@reduxSearch/API', 
    searchStateSelector:'@@reduxSearch/searchStateSelector',
    searchAction: '@@reduxSearch/action',
    initializeResources : '@@reduxSearch/initializeResources',
    receiveResult: '@@reduxSearch/receiveResult',
    search: '@@reduxSearch/search',
    createSearchAction: '@@reduxSearch/createSearchAction',
}


// /** @flow */
// export const SEARCH_API = '@@reduxSearch/API'
// export const SEARCH_STATE_SELECTOR = '@@reduxSearch/searchStateSelector'

// // Action constants
// export const ACTION = '@@reduxSearch/action'
// export const INITIALIZE_RESOURCES = '@@reduxSearch/initializeResources'
// export const RECEIVE_RESULT = '@@reduxSearch/receiveResult'
// export const SEARCH = '@@reduxSearch/search'
