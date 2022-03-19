import React from 'react'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <div className={styles.logo__container}>
            <p className={styles.logo__container__text}>tvDB</p>
          </div>
        </div>
        <nav>
          <a>Entrar</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
