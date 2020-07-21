/** @flow */
import React from 'react'
import styles from './CardWrapper.css'
import PropTypes from 'prop-types';

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired
}
export default function CardWrapper ({ children }) {
  return (
    <div className={styles.CardWrapper}>
      {children}
    </div>
  )
}
