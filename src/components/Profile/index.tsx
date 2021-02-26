import styles from '../../styles/components/Profile.module.css'

import { useContext } from 'react'
import { ChallengesContext } from '../../context/ChallengesContext';

const Profile = () => {
    const { level } = useContext(ChallengesContext)

    return (
            <div className={styles.profileContainer} >
                <img src="https://avatars.githubusercontent.com/u/69278888?s=460&u=9003c7855bc3beccd4d9013d6c6eaed857ce02ab&v=4" alt="avatar" />
            
                <div>
                    <strong>Maycon Reis Rosário</strong>
                    <p>
                        <img src="icons/level.svg" alt="level" />
                        Level {level}
                    </p>
                </div>
            </div>
    )
}

export default Profile
