import React from 'react'

import { FiAward, FiHome } from 'react-icons/fi'

import styles from '../../styles/components/Lateralbar.module.css'

const Lateralbar = () => {
    return (
        <div className={styles.menu}>
          <img className={styles.logo} src="Logo.svg" alt="Logo"/>
          <div className={styles.icons}>
            <FiHome />
            <FiAward />           
          </div>   
        </div>
    )
}

export default Lateralbar
