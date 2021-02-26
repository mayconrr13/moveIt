import { useContext, useState } from 'react';
import { ChallengesContext } from '../../context/ChallengesContext';
import { CountdownContext } from '../../context/CountdownContext';
import styles from '../../styles/components/ChallengeBox.module.css';

const ChallengeBox = () => {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.challengeBoxContainer} >
            {activeChallenge ? (
                <div className={styles.challengeActive} >
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                        onClick={handleChallengeFailed}
                        type="button" className={styles.challengeFailedButton} >Falhei</button>
                        <button type="button" 
                        onClick={handleChallengeSucceeded}
                        className={styles.challengeSucceededButton} >Consegui</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive} >
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de nível completando desafios
                    </p>
                </div>
            )}
        </div>
    )
}

export default ChallengeBox
