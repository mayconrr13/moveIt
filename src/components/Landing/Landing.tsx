import React from 'react'

import styles from '../../styles/components/Landing.module.css'

const Landing = ({initiateApp}) => {
    return (
        <div className={styles.page}>
            <img src="/Simbolo.svg" alt="simbolo" id={styles.background} />
            <div className={styles.landing}>
                <img src="/logo-full.svg" alt="logo"/>
                <h1>Bem-vindo</h1>
                <p>Em breve login com GitHub</p>
                <button type="button" onClick={initiateApp}>Clique para começar</button>
            </div>
        </div>
    )
}

export default Landing
