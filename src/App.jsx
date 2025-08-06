import React from 'react'
import BackgroundWrapper from './background'
import Loader from './Loader'
import Hero from './Hero'
import NavBar from './NavBar'
import SideBar from './SideBar'
import TechStack from './TechStack'
import Projects from './Projects'
export default function App() {
  return (
    <>
      {/* Loader sits on top of everything and disappears when done */}
      <Loader />

      {/* All actual content under it */}
      <NavBar />
      <BackgroundWrapper>
        <Hero />
        <SideBar />
        <TechStack />
        <Projects />
      </BackgroundWrapper>
    </>
  )
}
