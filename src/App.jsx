import { useEffect, useState } from 'react';
import './App.css';
import Proyecto from './components/Proyecto';
import Redes from './components/Redes';
import proyecto1 from './img/Proyecto 1.png'
import proyecto2 from './img/Proyecto 2.png'
import proyecto3 from './img/Proyecto 3.png'
import github1 from './img/Redes/1 - github.png'
import github2 from './img/Redes/2 - github.png'
import linkedin1 from './img/Redes/3 - linkedin.jpg'
import linkedin2 from './img/Redes/4 - linkedin.png'
import freecodecamp1 from './img/Redes/1 - freecodecamp.png'
import freecodecamp2 from './img/Redes/2 - freecodecamp.png'
import Presentacion from './components/Presentacion';
import Skill from './components/Skill';
import SkillLogo from './components/SkillLogo';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Nav />

      <Presentacion />

      <div className='container-titulo'>
        <h2 className='titulo'>Proyectos</h2>
        <div className="line"></div>
      </div>

      <section className='container-proyects' id='proyectos'>
        <>
          <Proyecto
            img={proyecto1}
            titulo={'Clases online'}
            github={false}
            link={'https://marce952.github.io/alumnos/'}
          />

          <Proyecto
            img={proyecto2}
            titulo={'Registro profesores'}
            link={'https://unique-pegasus-585ce4.netlify.app/registro'}
            github={false}
          />

          <Proyecto
            img={proyecto3}
            titulo={'Bronovios'}
            link={'https://www.bronovios.com/'}
            github={false}
          />
        </>
      </section>

      <section className='redes' id='redes'>
        <div className='container-titulo'>
          <h2 className='titulo-redes'>Redes</h2>
          <div className="line"></div>
        </div>

        <Redes
          img1={github1}
          alt1={'Github banner'}
          img2={github2}
          alt2={'Github logo'}
          link={'https://github.com/Marce952'}
        />

        <Redes
          img1={linkedin1}
          alt1={'LinkedIn banner'}
          img2={linkedin2}
          alt2={'LinkedIn logo'}
          link={'https://www.linkedin.com/in/marcelo-exequiel-garrido-68322924a/'}
        />

        <Redes
          img1={freecodecamp1}
          alt1={'freeCodeCamp banner'}
          img2={freecodecamp2}
          alt2={'freeCodeCamp logo'}
          link={'https://www.freecodecamp.org/Marce952'}
        />
      </section>

      <div className='container-titulo'>
        <h2 className="titulo">SKILL</h2>
        <div className="line"></div>
      </div>

      <section className='container-skills' id='skill'>
        <Skill
          svg={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" fill="url(#linear)" class="bi bi-database" viewBox="0 0 16 16"><linearGradient id='linear'><stop offset={'0'} stopColor='#066f99'></stop><stop offset={'1'} stopColor='#6a0699'></stop></linearGradient><path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313ZM13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 5.698ZM14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13V4Zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 8.698Zm0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525Z" /></svg>}
          titulo={'Backend'}
          li1={'MySQL'}
          li2={"SQL Server"}
          li3={"API's - React"}
        />

        <Skill
          svg={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" fill="url(#linear)" class="bi bi-code-slash" viewBox="0 0 16 16"><path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" /></svg>}
          titulo={'Frontend'}
          li1={'Tailwind'}
          li2={'React'}
          li3={'Next.js'}
          li4={'React native'}
        />

        <Skill
          svg={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="url(#linear)" class="bi bi-braces" viewBox="0 0 16 16">
            <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
          </svg>}
          // svg={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" fill="url(#linear)" class="bi bi-code-square" viewBox="0 0 16 16">
          //   <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          //   <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
          // </svg>}
          titulo={'Genexus'}
        />

        <Skill
          svg={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" fill="url(#linear)" class="bi bi-code-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
          </svg>}
          titulo={'C#'}
          li1={'.NET'}
        />
      </section>

      <div className="container-skills_svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 270"><path fill="#000000" fill-opacity="1" d="M0,160L26.7,165.3C53.3,171,107,181,160,192C213.3,203,267,213,320,197.3C373.3,181,427,139,480,117.3C533.3,96,587,96,640,112C693.3,128,747,160,800,186.7C853.3,213,907,235,960,250.7C1013.3,267,1067,277,1120,282.7C1173.3,288,1227,288,1280,282.7C1333.3,277,1387,267,1413,261.3L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
        <section className='container-img__skills'>
          <SkillLogo />
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 370"><path fill="#000000" fill-opacity="1" d="M0,160L26.7,165.3C53.3,171,107,181,160,192C213.3,203,267,213,320,197.3C373.3,181,427,139,480,117.3C533.3,96,587,96,640,112C693.3,128,747,160,800,186.7C853.3,213,907,235,960,250.7C1013.3,267,1067,277,1120,282.7C1173.3,288,1227,288,1280,282.7C1333.3,277,1387,267,1413,261.3L1440,256L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
      </div>

    </>
  );
}

export default App;
