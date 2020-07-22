/** @flow */
// import 'react-virtualized/styles.css'

import Immutable from 'immutable'
import styles from './Widget.css'
import React, {Component } from 'react'
import { List, WindowScroller } from 'react-virtualized'
// import VirtualScroll from 'react-virtual-scroll'
import PropTypes from 'prop-types';

class Widget extends Component {


  static propTypes = {
    generateData: PropTypes.func.isRequired,
    recordIds: PropTypes.any.isRequired,
    recordsMap: PropTypes.any.isRequired,
    rowRenderer: PropTypes.any.isRequired,
    searchData: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired  
  }
  // export default function Widget ({
  //   generateData,
  //   recordIds,
  //   recordsMap,
  //   rowRenderer,
  //   searchData,
  //   title
  // })
    handelGenerateData = () => {
      const {generateData} = this.props
      return (generateData()) 
    }

    handelSearchData = () => {
      const {searchData} = this.props
      return (handelSearchData()) 
    }



   render () {
     const {recordIds, title, generateData, rowRenderer, recordsMap, searchData, } = this.props
    const totalSize = recordsMap instanceof Immutable.Collection
      ? recordsMap.size
      : Object.keys(recordsMap).length
    const filteredSize = recordIds instanceof Immutable.Collection
      ? recordIds.size
      : recordIds.length

    return (
      <div>
        <h2 className={styles.Title}>
          {title}
          {totalSize > 0 &&
            <small className={styles.ResultsSummary}>
              {filteredSize} of {totalSize}
            </small>
          }
        </h2>
        <div className={styles.ControlBar}>
          <button
            className={styles.Button}
            onClick={this.handelGenerateData()}
          >
            Generate Data
          </button>
          <input
            disabled={recordsMap.size === 0}
            className={styles.SearchInput}
            onChange={event => {handelSearchData(event.target.value)}}
            placeholder='Search..'
          />
        </div>
        {/* <WindowScroller
          className={styles.VirtualScroll}
          width={300}
          height={200}
          noRowsRenderer={() => (
            <div className={styles.noRows}>
              {totalSize > 0 ? 'No results' : 'Generate data'}
            </div>
          )}
          rowsCount={filteredSize}
          rowHeight={25}
          rowRenderer={rowRenderer}
        /> */}



      </div>
    )
  }
}

export default Widget
