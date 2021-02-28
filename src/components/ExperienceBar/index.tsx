import React, { useContext } from 'react'
import { ChallengesContext } from '../../context/ChallengesContext';

import styles from '../../styles/components/ExperienceBar.module.css';

const ExperienceBar = () => {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar} >
            <span>0 xp</span>
                <div>
                    <div style={{ width: `${!percentToNextLevel ? 0 : percentToNextLevel}%`}} />

                    <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>{currentExperience}xp</span>
                </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}

export default ExperienceBar
