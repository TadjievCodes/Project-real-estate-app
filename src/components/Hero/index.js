import * as React from 'react'
import styles from './styles.module.css'
import classnames from 'classnames'

// Always add .hero from styles.module.css

function Hero({ miniHero }) {
  const classes = classnames(styles.hero, 'hero', 'mb-3',  {
    'hero-sm': miniHero,
    [styles.miniHero]: miniHero,
    'hero-lg': !miniHero
  })

  return (
    <div className={classes}>
      <div className="hero-body text-center text-light">
        <h1>Premium Property Finder</h1>
        <p className="mb-0">Bringing premium property right to your fingertips</p>
      </div>
    </div>
  )
}

export default Hero