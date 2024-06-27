import React from 'react';

import { Link } from 'gatsby';
import { OutboundLink, trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { StaticImage } from 'gatsby-plugin-image';
import PrinterSVG from '../../assets/icons/printer.svg';
import { MdOutlineWork } from 'react-icons/md';
import ImageGrid from '../../components/grid/Grid';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import * as styles from './home.module.scss';

const ImageCard = ({ imagePath, title, link }) => {
  return (
    <div className={styles.divimg}>
      <StaticImage
        src={imagePath}
        alt={title}
        layout="fixed"
        className="image"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
      <div className={styles.infoimgstyles}>
        <div className={styles.titleimginfo}>
          <p style={{ fontWeight: '600', fontSize: '20px' }}>{title}</p>
          <Link to={link} target="_blank">
            <button className={styles.printbutton}>Visit Page</button>
          </Link>
        </div>
        <span className="skill-item">Git</span>
        <span className="skill-item">Redux</span>
        <span className="skill-item">React</span>
      </div>
    </div>
  );
};

const Home: React.FunctionComponent = () => {
  const handleCVPress = () => {
    trackCustomEvent({
      category: 'engagement',
      action: 'view_item',
      label: 'CV link',
    });
  };

  const handleBlogPress = () => {
    trackCustomEvent({
      category: 'engagement',
      action: 'view_item',
      label: 'blog link',
    });
  };

  const images = [
    {
      src: '../../assets/images/dreamjunk.png',
      alt: 'Imagen 1',
      title: 'Título de la imagen 1',
    },

    // ... más imágenes
  ];

  return (
    <main className={styles.home}>
      <div className={styles.headhome}>
        <div className={styles.titleportfoil}>
          <h1>Jose Soria</h1>
          <span>lead software engineer & fullstack developer</span>
        </div>

        <Link to="/cv">
          <button className={styles.printButton}>View CV resume PDF</button>
        </Link>
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
          <div className={styles.divimg}>
            <StaticImage
              src={'../../assets/images/carnesmockup.png'}
              alt={'Dream Junk'}
              layout="fixed" // Ajusta el layout (fixed, intrinsic, fill)
              className="image" // Clase CSS para la imagen
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Estilo CSS para la imagen
            />
            <div className={styles.infoimgstyles}>
              <div className={styles.titleimginfo}>
                {' '}
                <p style={{ fontWeight: '600', fontSize: '20px' }}>
                  Carnes argentinas
                </p>
                <Link
                  to="https://elargentino.netlify.app/home
"
                  target="_blank"
                >
                  <button className={styles.printbutton}>Visit Page</button>
                </Link>
              </div>
              <span className="skill-item ">Git</span>
              <span className="skill-item ">Redux</span>
              <span className="skill-item ">React</span>
            </div>
          </div>
          <div className={styles.divimg}>
            <StaticImage
              src={'../../assets/images/carnesmockup.png'}
              alt={'Dream Junk'}
              layout="fixed" // Ajusta el layout (fixed, intrinsic, fill)
              className="image" // Clase CSS para la imagen
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Estilo CSS para la imagen
            />
            <div className={styles.infoimgstyles}>
              <div className={styles.titleimginfo}>
                {' '}
                <p style={{ fontWeight: '600', fontSize: '20px' }}>
                  Carnes argentinas
                </p>
                <Link
                  to="https://elargentino.netlify.app/home
"
                  target="_blank"
                >
                  <button className={styles.printbutton}>Visit Page</button>
                </Link>
              </div>
              <span className="skill-item ">Git</span>
              <span className="skill-item ">Redux</span>
              <span className="skill-item ">React</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
