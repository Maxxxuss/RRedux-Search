/** @flow */
import React from 'react'
import styles from './Card.css'
import PropTypes from 'prop-types';


Card.propTypes = {
  children: PropTypes.node.isRequired
}
export default function Card ({ children }) {
  return (
    <div className={styles.Card}>
      {children}
    </div>
  )
}
