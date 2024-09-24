import React from 'react';

import { Link } from 'gatsby';
import { OutboundLink, trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { StaticImage } from 'gatsby-plugin-image';
import PrinterSVG from '../../assets/icons/printer.svg';
import { MdOutlineWork } from 'react-icons/md';
import ImageGrid from '../../components/grid/Grid';
import Projects from './projects.json';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import estudio from '../../assets/images/estudio.png';
import gestini from '../../assets/images/gestini.webp';
import carnesmockup from '../../assets/images/carnesmockup.png';
import academy from '../../assets/images/academy.png';
import dreamavant from '../../assets/images/dreamjunk (2).png';
import gestinilanding from '../../assets/images/gestinilanding.webp';
import lootieverse from '../../assets/images/lootieverse.png';
import explorador from '../../assets/images/explorador.png';
import naka from '../../assets/images/naka.png';
import aivision from '../../assets/images/aivision.png';
import astrax from '../../assets/images/astrax.png';
import cresi from '../../assets/images/cresi.jpeg';
import henryshop from '../../assets/images/henryshop.jpeg';
import cyt from '../../assets/images/cyt.png';
import portfoilold from '../../assets/images/portfoilold.png';

import * as styles from './home.module.scss';

const Home: React.FunctionComponent = () => {
  const projects = [
    {
      title: 'Gestini Software ERP',
      image: gestini,
      category: 'fullstack',
      alt: 'Dream Junk',
      skills: [
        'React',
        'Java Spring Boot',
        'SASS',
        'Nestjs',
        'FastAPI',
        'Rest Api',
        'Electron',
        'MYSQL',
        'DIGITAL OCEAN',
        'Redux toolkit',
      ],
      description:
        'Plataforma fullstack masiva de manejo de stocks, productos, clientes, proveedores, carga de documentos, carga de productos masivo, servicios en la nube, integraciones y aplicaciones propias, afip, inteligencia artificial, recursos humanos, multiples sucursales, y mucho mas',
      links: {
        visit: 'https://www.gestini.com/',
        github: '#',
      },
    },
    {
      title: 'Dream Junk Studios ERP',
      image: estudio,
      category: 'fullstack',
      alt: 'Dream Junk',
      skills: [
        'React',
        'Node',
        'Express',
        'Express',
        'Mongodb',
        'sass',
        'Rest Api',
        'Redux toolkit',
      ],
      description:
        'Plataforma privada para la gestión de empresas y proyectos, con red social interna para empleados, seguimiento de proyectos y tareas, horarios del personal, múltiples empresas y sucursales, chat interno y gestión de perfiles.',
      links: {
        visit: '#',
        github: '#',
      },
    },
    {
      title: 'Carnes Argentinas',
      image: carnesmockup,
      category: 'frontend',
      alt: 'Carnes Argentinas',
      skills: ['Tailwindcss', 'Redux', 'React'],
      description:
        'E-commerce especializado en la venta de productos y servicios que reflejan la rica cultura, tradiciones y temática argentina.',
      links: {
        visit: 'https://elargentino.netlify.app/home',
        github: 'https://github.com/josessoria/ElArgentinoEcommerce',
      },
    },
    {
      title: 'Dream Junk Academy',
      image: academy,
      category: 'fullstack',
      alt: 'Dream Junk',
      skills: [
        'Nodejs',
        'Express',
        'Redux',
        'React',
        'Mongodb',
        'Nextjs14',
        'Rest Api',
      ],
      description:
        'Portafolio de Dream Junk integrado con base de datos, ofreciendo funcionalidades completas de inicio de sesión y registro de usuarios para una experiencia personalizada y segura.',
      links: {
        visit: '#',
        github: '#',
      },
    },
    {
      title: 'Dream Avant Garde',
      image: dreamavant,
      category: 'fullstack',
      alt: 'Dream Avant Garde',
      skills: [
        'Nodejs',
        'Express',
        'Redux',
        'React',
        'Mongodb',
        'Nextjs14',
        'Rest Api',
      ],
      description:
        'El portafolio de Dream Avant Garde es una plataforma con base de datos que ofrece inicio de sesión y registro de usuarios para una experiencia segura, traducción multilingüe, integración con blockchain para autenticidad, notificaciones sobre actualizaciones y un sistema de afiliados que otorga beneficios por referir nuevos usuarios.',
      links: {
        visit: 'https://www.dreamjunkstudios.com/',
        github: '#',
      },
    },
    {
      title: 'Gestini Landing Page',
      image: gestinilanding,
      category: 'frontend',
      alt: 'Gestini Landing Page',
      skills: ['Nextui', 'Vite', 'React', 'Mongodb'],
      description:
        'El objetivo de este proyecto es desarrollar una landing page para Gestini, diseñada para captar el interés de los usuarios y permitirles suscribirse a un newsletter. Esta página servirá como un canal de comunicación para mantener informados a los visitantes sobre el progreso del desarrollo de la aplicación y su disponibilidad para su uso.',
      links: {
        visit: 'https://gestini.com/',
        github: '#',
      },
    },
    {
      title: 'Lootieverse',
      image: lootieverse,
      category: 'frontend',
      alt: 'lootieverse',
      skills: ['React', 'Nextjs14', 'SASS', 'tailwindcss', 'mongodb'],
      description:
        'Página "Coming Soon" diseñada para la plataforma de Lootieverse, y con un newsletter conectado a mongodb, destacando un emocionante contador regresivo que genera expectativa antes del lanzamiento.',
      links: {
        visit: 'https://lootieverse-production.up.railway.app/',
        github: '#',
      },
    },
    {
      title: 'AIvision',
      image: aivision,
      alt: 'aivision',
      category: 'frontend',
      skills: ['React', 'Nextjs14', 'SASS', 'tailwindcss', 'mongodb'],
      description:
        'Página "Coming Soon" diseñada para la plataforma de Aivision, y con un newsletter conectado a mongodb, destacando un emocionante contador regresivo que genera expectativa antes del lanzamiento.',
      links: {
        visit: 'https://coming-soon-aivision-production.up.railway.app/',
        github: '#',
      },
    },
    {
      title: 'Explorador',
      image: explorador,
      alt: 'Explorador',
      category: 'frontend',
      skills: [
        'React',
        'sass',
        'tailwindcss',
        'nextjs',
        'html',
        'Others frameworks',
      ],
      description:
        'Página "Coming Soon" diseñada para la plataforma de Explorador, y con un newsletter conectado a mongodb, destacando un emocionante contador regresivo que genera expectativa antes del lanzamiento.',
      links: {
        visit: 'https://exploradorcoming-production.up.railway.app/',
        github: '#',
      },
    },
    {
      title: 'Naka',
      image: naka,
      alt: 'Merlokit',
      category: 'frontend',
      skills: ['React', 'Nextjs14', 'SASS', 'tailwindcss', 'mongodb'],
      description:
        'Página "Coming Soon" diseñada para la plataforma de Naka, y con un newsletter conectado a mongodb, destacando un emocionante contador regresivo que genera expectativa antes del lanzamiento.',
      links: {
        visit: 'https://nakacoming-production.up.railway.app/',
        github: '#',
      },
    },
    {
      title: 'Astrax',
      image: astrax,
      alt: 'astrax',
      category: 'frontend',
      skills: ['React', 'Nextjs14', 'SASS', 'tailwindcss'],
      description:
        'El portafolio del equipo de trabajo de software presenta proyectos destacados, mostrando habilidades en desarrollo, diseño y gestión. Incluye secciones para la descripción de cada proyecto, funcionalidades implementadas, tecnologías utilizadas y resultados alcanzados, proporcionando una visión clara de la experiencia y capacidades del equipo.',
      links: {
        visit: 'https://astraxs.com/',
        github: '#',
      },
    },
    {
      title: 'Cresi',
      image: cresi,
      alt: 'cresi',
      category: 'fullstack',
      skills: ['VUE', 'SASS', 'mongodb'],
      description:
        'La plataforma académica, desarrollada con VUE, SASS y MongoDB, integra juegos en la aplicación para ofrecer una educación eficiente y divertida. Esta solución innovadora busca mejorar el aprendizaje a través de interactividad y entretenimiento.',
      links: {
        visit: 'https://www.cresi.com.ar/',
        github: '#',
      },
    },
    {
      title: 'Mi portafolio antiguo',
      image: portfoilold,
      category: 'frontend',
      alt: 'portfoilold',
      skills: ['react'],
      description: 'Mi portafolio antiguo que tiene proyectos viejos',
      links: {
        visit: 'https://josesoria.netlify.app/#/',
        github: '#',
      },
    },
    {
      title: 'Henry Shop',
      image: henryshop,
      category: 'fullstack',
      alt: 'henryshop',
      skills: ['react, restAPI'],
      description: 'Proyecto realizado en el bootcamp de soyhenry',
      links: {
        visit: '#',
        github: '#',
      },
    },
    {
      title: 'Ecommerce',
      image: cyt,
      category: 'fullstack',
      alt: 'cyt',
      skills: ['react, Nodejs, Mongodb, restAPI, redux toolkit'],
      description:
        'Aplicacion fullstack con sistema de logeo y registro, dashboard administracion, creacion, edicion de productos y categoria, sistema de roles',
      links: {
        visit: 'https://cyt-express-react.vercel.app/',
        github: 'https://github.com/josessoria/CYT-EXPRESS-REACT',
      },
    },
  ];
  return (
    <main className={styles.home}>
      <div className={styles.headhome}>
        <div className={styles.titleportfoil}>
          <h1>Jose Soria</h1>
          <span>lead software engineer & fullstack developer</span>
        </div>
        <div className="buttoncv">
          <Link to="/cv">
            <button className={styles.printButton}>View CV resume PDF</button>
          </Link>
        </div>
      </div>
      <div className={styles.infosection}>
        <span>
          Con más de 3 años liderando proyectos web en frontend y backend,
          contribuyo al diseño, implementación y mantenimiento de soluciones
          escalables. Apasionado por la programación y comprometido con la
          mejora continua, poseo habilidades técnicas sólidas y un profundo
          conocimiento de las mejores prácticas en desarrollo web.
        </span>
      </div>
      <h2
        style={{
          fontWeight: 300,
          color: '#222',
          fontSize: '30px',
          marginBottom: '30px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Skills
      </h2>
      <div className={styles.skillsmid}>
        {' '}
        <span className={`skill-item ${styles.skillsitemmid}`}>React</span>
        <span className={`skill-item ${styles.skillsitemmid}`}>Nextjs</span>
        <span className={`skill-item ${styles.skillsitemmid}`}>Java</span>
        <span className={`skill-item ${styles.skillsitemmid}`}>
          Spring Boot
        </span>
        <span className={`skill-item ${styles.skillsitemmid}`}>ExpressJs</span>
        <span className={`skill-item ${styles.skillsitemmid}`}>Typescript</span>
        <span className={`skill-item ${styles.skillsitemmid}`}>Nodejs</span>
        <span className={`skill-item ${styles.skillsitemmid}`}>Redux</span>
        <span className={`skill-item ${styles.skillsitemmid}`}>
          TailwindCSS
        </span>
        <span className={`skill-item ${styles.skillsitemmid}`}>PostgreSQL</span>
        <span className={`skill-item ${styles.skillsitemmid}`}>Mongodb</span>
        <span className={`skill-item ${styles.skillsitemmid}`}>MYSQL</span>
        <span className={`skill-item ${styles.skillsitemmid}`}>Firebase</span>
        <span className={`skill-item ${styles.skillsitemmid}`}>Boostrap</span>
        <span className={`skill-item ${styles.skillsitemmid}`}>Figma</span>
      </div>
      <div
        className={styles.timelinesection}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            fontWeight: 300,
            color: '#222',
            fontSize: '30px',
            marginBottom: '30px',
          }}
        >
          Experiencia
        </h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#ffffff', color: '#222' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
            date="Oct 2023 - present"
            iconStyle={{ background: '#fff', color: '#222' }}
            icon={<MdOutlineWork />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: 400, color: '#222' }}
            >
              Project Leader / Director de sistemas
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {' '}
              DreamJunkStudio.com
            </h4>
            <p
              style={{
                fontWeight: 300,
                color: '#222',
                fontSize: '12px',
                marginBottom: '1em',
              }}
            >
              Lideré la ejecución de siete proyectos con metodologías &nbsp;
              <span className="skill-item ">Scrum</span>con &nbsp;
              <span className="skill-item ">Git</span>,
              <span className="skill-item ">Trello</span>y
              <span className="skill-item">Notion</span>, coordinando equipos
              siendo <span className="skill-item">Leadership</span>, &nbsp;
              <span className="skill-item">Mentorship</span> y contribuyendo al
              desarrollo con &nbsp;
              <span className="skill-item">Nextjs</span>, &nbsp;
              <span className="skill-item">Tailwind CSS</span>, &nbsp;
              <span className="skill-item">Redux</span>y &nbsp;
              <span className="skill-item">React</span> en el frontend, y{' '}
              <span className="skill-item">Expressjs</span>, &nbsp;
              <span className="skill-item">PostgreSQL</span>, &nbsp;
              <span className="skill-item">Typescript</span> en el backend.
              Además, guié en el uso de AWS. Revisé y aporté ideas de diseño con
              Figma para una experiencia de usuario excepcional.
            </p>
            <Link
              to="https://dreamjunkstudios.com/
"
              target="_blank"
            >
              {' '}
              <button className={styles.printbutton}>Visit Page</button>
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2022 - Oct 2023"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#222' }}
            icon={<MdOutlineWork />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: 400, color: '#222' }}
            >
              Leader Full Stack
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              DreamJunkStudio.com
            </h4>
            <p
              style={{
                fontWeight: 300,
                color: '#222',
                fontSize: '12px',
                marginBottom: '1em',
                textAlign: 'start',
              }}
            >
              Como <span className="skill-item">Leadership</span> y
              desarrollador fullstack, lideré equipos en proyectos
              utilizando&nbsp;
              <span className="skill-item">TypeScript</span>, &nbsp;
              <span className="skill-item">Node.js</span>, &nbsp;
              <span className="skill-item">React</span>, &nbsp;
              <span className="skill-item">Next.js</span>, &nbsp;
              <span className="skill-item">Tailwind CSS</span>, &nbsp;
              <span className="skill-item">SASS/SCSS</span>, &nbsp;
              <span className="skill-item">Redux</span>, &nbsp;
              <span className="skill-item">Express.js</span>, &nbsp;
              <span className="skill-item">MongoDB</span>, &nbsp;
              <span className="skill-item">Firebase</span> &nbsp;y&nbsp;
              <span className="skill-item">PostgreSQL</span>.&nbsp; Mantuve un
              enfoque actualizado en herramientas y lideré soluciones
              innovadoras. Participé en revisión de diseño y aporté ideas con
              Figma.
            </p>
            <Link
              to="https://dreamjunkstudios.com/
"
              target="_blank"
            >
              {' '}
              <button className={styles.printbutton}>Visit Page</button>
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2022 - Sep 2022"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#222' }}
            icon={<MdOutlineWork />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: 400, color: '#222' }}
            >
              Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">CrESI.com.ar</h4>
            <p
              style={{
                fontWeight: 300,
                color: '#222',
                fontSize: '12px',
                marginBottom: '1em',
                textAlign: 'start',
              }}
            >
              Como desarrollador frontend en CrESI, lideré la creación de
              experiencias digitales innovadoras utilizando&nbsp;
              <span className="skill-item">Vue</span>, &nbsp;
              <span className="skill-item">Tailwind CSS</span>, &nbsp;
              <span className="skill-item">SASS/SCSS</span> &nbsp;en el front,
              &nbsp;
              <span className="skill-item">Express.js</span> &nbsp;para
              comunicarme con el backend, y &nbsp;
              <span className="skill-item">PostgreSQL</span> &nbsp;y &nbsp;
              <span className="skill-item">Firebase</span> &nbsp;como base de
              datos. Implementé &nbsp;
              <span className="skill-item">TypeScript</span>, &nbsp;
              <span className="skill-item">Node.js</span> &nbsp;y &nbsp;
              <span className="skill-item">Redux</span> &nbsp;para garantizar un
              desarrollo robusto y escalable, beneficiando a más de 15.000
              estudiantes en Argentina y otros países latinoamericanos.
            </p>

            <Link
              to="https://www.cresi.com.ar/
"
              target="_blank"
            >
              {' '}
              <button className={styles.printbutton}>Visit Page</button>
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2022 - Sep 2022"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#222' }}
            icon={<MdOutlineWork />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: 400, color: '#222' }}
            >
              Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Fiver / Upwork / Workana
            </h4>
            <p
              style={{
                fontWeight: 300,
                color: '#222',
                fontSize: '12px',
                marginBottom: '1em',
                textAlign: 'start',
              }}
            >
              <span className="skill-item">Vue</span> &nbsp;
              <span className="skill-item">Tailwind CSS</span> &nbsp;
              <span className="skill-item">SASS/SCSS</span> &nbsp;
              <span className="skill-item">Express.js</span> &nbsp;
              <span className="skill-item">PostgreSQL</span> &nbsp;
              <span className="skill-item">Firebase</span> &nbsp;
              <span className="skill-item">TypeScript</span> &nbsp;
              <span className="skill-item">Node.js</span> &nbsp;
              <span className="skill-item">Redux</span> &nbsp;
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      <div
        className={styles.portfoil}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            fontWeight: 300,
            color: '#222',
            fontSize: '30px',
            marginBottom: '30px',
          }}
        >
          Trabajos
        </h2>
        <div className={styles.gridimage} style={{}}>
          {projects.map((project, index) => (
            <div className={styles.divimg} key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="image"
                style={{ width: '100%', height: '300px', objectFit: 'contain' }}
              />

              <div className={styles.infoimgstyles}>
                <div className="topinfo">
                  {' '}
                  <div className={styles.titleimginfo}>
                    <p style={{ fontWeight: '600', fontSize: '20px' }}>
                      {project.title}
                    </p>
                  </div>
                  <div className={styles.skillitemdiv}>
                    {project.skills.map((skill, i) => (
                      <span className="skill-item" key={i}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="description item">{project.description}</div>
                <div className={styles.buttonaction}>
                  <a
                    href={project.links.visit}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      project.links.visit === '#'
                        ? styles.disabledbutton
                        : styles.activebutton
                    }
                  >
                    <span>Visit</span>
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      project.links.github === '#'
                        ? styles.disabledbutton
                        : styles.activebutton
                    }
                  >
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
