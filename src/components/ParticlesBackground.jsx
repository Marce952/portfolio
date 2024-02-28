import React, { useCallback, useEffect } from 'react'
import Particles from 'react-particles'
import { loadFull } from "tsparticles"
import particlesConfig from './config/particles-config'

const ParticlesBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine)
  }, [])

  const particulesOption = {...particlesConfig, fullScreen: {enable: false}}

  return (
    <div className="particles-container">
      <Particles
        options={particulesOption}
        width="100%"
        height="100%"
        init={particlesInit}
      />
    </div>
  )
}

export default ParticlesBackground