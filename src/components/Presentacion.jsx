import React from 'react'
import ParticlesBackground from './ParticlesBackground'

const Presentacion = () => {
    return (
        <>
            <div className='container-presentacion'>
                <div className="container-particles">
                    <ParticlesBackground />
                </div>
                <div className='presentacion'>
                    <h1>Garrido Marcelo</h1>
                    <div className='line'></div>
                    <p>Developer</p>
                </div>
                <div className="line-v"></div>
                <div className='presentacion-info'>
                    <p>Recibido de 'Tecnico Universitario en programación' & estudiante en Oakland Institute,
                    con muchas ganas de aprender, emprender y programar.</p>
                </div>
            </div>
        </>
    )
}

export default Presentacion