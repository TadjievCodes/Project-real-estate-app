import React from 'react'
import styles from '../keyFeatures/styles.module.css'


class KeyFeatures extends React.Component {
  render() {
    const { features } = this.props

    return (
      <React.Fragment>
        <p>Key Features</p>
        <ul className={styles.list}>
          {features.map(feature => (
            <li key={feature}>
              <small>{feature}</small>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default KeyFeatures
