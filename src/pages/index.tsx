import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head';

import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import Lateralbar from "../components/Lateralbar";

import styles from '../styles/pages/Home.module.css'
import ChallengeBox from "../components/ChallengeBox";
import CountdownProvider from "../context/CountdownContext";
import ChallengesProvider from '../context/ChallengesContext';
import Landing from '../components/Landing/Landing';

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
}

export default function Home(props: HomeProps) {
  const [goToHome, setGoToHome] = useState(false);

  function initiateApp() {
      setGoToHome(true)
  }

  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
      {!goToHome 
      ?
      <Landing initiateApp={initiateApp} />
      :
      <div className={styles.complete}>
          <Head>
            <title>Início | moveIt</title>
          </Head>

        <Lateralbar />
  
        <div className={styles.container}>
  
          <ExperienceBar />
  
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
      }
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props:{
      level: Number(level), 
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}