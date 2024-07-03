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

import * as styles from './home.module.scss';

const Home: React.FunctionComponent = () => {
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
          <div className={styles.divimg}>
            <StaticImage
              src={'../../assets/images/Productsock.png'}
              alt={'Dream Junk'}
              layout="fixed" // Ajusta el layout (fixed, intrinsic, fill)
              className="image" // Clase CSS para la imagen
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Estilo CSS para la imagen
            />
            <div className={styles.infoimgstyles}>
              <div className={styles.titleimginfo}>
                {' '}
                <p style={{ fontWeight: '600', fontSize: '20px' }}>
                  Gestion empresarial
                </p>
              </div>
              <div className={styles.skillitemdiv}>
                <span className="skill-item ">Java Spring Boot</span>
                <span className="skill-item ">React</span>
                <span className="skill-item ">Next14</span>
                <span className="skill-item ">Tailwindcss</span>
                <span className="skill-item ">Redux Toolkit</span>
                <span className="skill-item ">Electronjs</span>
                <span className="skill-item ">AWS</span>
                <span className="skill-item ">MYSQL</span>
                <span className="skill-item ">Rest Api</span>
              </div>
              <div className="description item">
                Software web y de escritorio de gestion de inventarios y
                facturacion para empresas medianas y grandes, con base de datos
                en la nube, y sistema de multimple empresas y sucursales
              </div>
              <div className={styles.buttonaction}>
                <a href="#">
                  <span className={styles.disabledbutton}>Visit </span>
                </a>

                <a href="#">
                  <span className={styles.disabledbutton}>Github</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.divimg}>
            <StaticImage
              src={'../../assets/images/estudio.png'}
              alt={'Dream Junk'}
              layout="fixed" // Ajusta el layout (fixed, intrinsic, fill)
              className="image" // Clase CSS para la imagen
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Estilo CSS para la imagen
            />
            <div className={styles.infoimgstyles}>
              <div className={styles.titleimginfo}>
                {' '}
                <p style={{ fontWeight: '600', fontSize: '20px' }}>
                  Dream Junk Studios
                </p>
              </div>
              <div className={styles.skillitemdiv}>
                <span className="skill-item ">React</span>
                <span className="skill-item ">Node</span>
                <span className="skill-item ">Express</span>
                <span className="skill-item ">Express</span>
                <span className="skill-item ">Mongodb</span>
                <span className="skill-item ">sass</span>
                <span className="skill-item ">Rest Api</span>
              </div>
              <div className="description item">
                Plataforma privada para la gestión de empresas y proyectos, con
                red social interna para empleados, seguimiento de proyectos y
                tareas, horarios del personal, múltiples empresas y sucursales,
                chat interno y gestión de perfiles.
              </div>
              <div className={styles.buttonaction}>
                <a href="#" target="blank_">
                  <span className={styles.disabledbutton}>Visit </span>
                </a>

                <a href="#" target="blank_">
                  <span className={styles.disabledbutton}>Github</span>
                </a>
              </div>
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
              </div>
              <div className={styles.skillitemdiv}>
                <span className="skill-item ">Tailwindcss</span>
                <span className="skill-item ">Redux</span>
                <span className="skill-item ">React</span>
              </div>

              <div className="description item">
                E-commerce especializado en la venta de productos y servicios
                que reflejan la rica cultura, tradiciones y temática argentina.
              </div>
              <div className={styles.buttonaction}>
                <a href="https://elargentino.netlify.app/home" target="blank_">
                  <span>Visit </span>
                </a>

                <a
                  href="https://github.com/josessoria/ElArgentinoEcommerce"
                  target="blank_"
                >
                  <span>Github</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.divimg}>
            <StaticImage
              src={'../../assets/images/Dream.png'}
              alt={'Dream Junk'}
              layout="fixed" // Ajusta el layout (fixed, intrinsic, fill)
              className="image" // Clase CSS para la imagen
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Estilo CSS para la imagen
            />
            <div className={styles.infoimgstyles}>
              <div className={styles.titleimginfo}>
                {' '}
                <p style={{ fontWeight: '600', fontSize: '20px' }}>
                  Dream Junk Studios
                </p>
              </div>
              <div className={styles.skillitemdiv}>
                <span className="skill-item ">Nodejs</span>
                <span className="skill-item ">Express</span>
                <span className="skill-item ">Redux</span>
                <span className="skill-item ">React</span>
                <span className="skill-item ">Mongodb</span>
                <span className="skill-item ">Nextjs14</span>
                <span className="skill-item ">Rest Api</span>
              </div>
              <div className="description item">
                Portafolio de Dream Junk integrado con base de datos, ofreciendo
                funcionalidades completas de inicio de sesión y registro de
                usuarios para una experiencia personalizada y segura.
              </div>
              <div className={styles.buttonaction}>
                <a
                  href="https://portafolio2-production-0416.up.railway.app/"
                  target="blank_"
                >
                  <span>Visit </span>
                </a>

                <a href="#">
                  <span className={styles.disabledbutton}>Github</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.divimg}>
            <StaticImage
              src={'../../assets/images/AIVISION.png'}
              alt={'Dream Junk'}
              layout="fixed" // Ajusta el layout (fixed, intrinsic, fill)
              className="image" // Clase CSS para la imagen
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Estilo CSS para la imagen
            />
            <div className={styles.infoimgstyles}>
              <div className={styles.titleimginfo}>
                {' '}
                <p style={{ fontWeight: '600', fontSize: '20px' }}>AIVISION</p>
              </div>
              <div className={styles.skillitemdiv}>
                <span className="skill-item ">React</span>
                <span className="skill-item ">Nextjs14</span>
                <span className="skill-item ">SASS</span>
                <span className="skill-item ">tailwindcss</span>
                <span className="skill-item ">Nextjs14</span>
              </div>

              <div className="description item">
                Página "Coming Soon" diseñada para la plataforma de Aivision,
                destacando un emocionante contador regresivo que genera
                expectativa antes del lanzamiento.
              </div>
              <div className={styles.buttonaction}>
                <a
                  href="https://aivision-coming-soon-production.up.railway.app/"
                  target="blank_"
                >
                  <span>Visit </span>
                </a>

                <a href="#">
                  <span className={styles.disabledbutton}>Github</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.divimg}>
            <StaticImage
              src={'../../assets/images/academy.png'}
              alt={'Dream Junk'}
              layout="fixed" // Ajusta el layout (fixed, intrinsic, fill)
              className="image" // Clase CSS para la imagen
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Estilo CSS para la imagen
            />
            <div className={styles.infoimgstyles}>
              <div className={styles.titleimginfo}>
                {' '}
                <p style={{ fontWeight: '600', fontSize: '20px' }}>
                  Dream Junk Academy
                </p>
              </div>
              <div className={styles.skillitemdiv}>
                <span className="skill-item ">React</span>
                <span className="skill-item ">sass</span>
                <span className="skill-item ">tailwindcss</span>
                <span className="skill-item ">Nextjs14</span>
              </div>

              <div className="description item">
                Página web diseñada y desarrollada exclusivamente para Dream
                Junk Academy, ofreciendo una experiencia digital única que
                refleja su misión y valores.
              </div>
              <div className={styles.buttonaction}>
                <a href="https://beta.dreamjunkacademy.com/" target="blank_">
                  <span>Visit </span>
                </a>

                <a href="#">
                  <span className={styles.disabledbutton}>Github</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.divimg}>
            <StaticImage
              src={'../../assets/images/portfoilold.png'}
              alt={'Dream Junk'}
              layout="fixed" // Ajusta el layout (fixed, intrinsic, fill)
              className="image" // Clase CSS para la imagen
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Estilo CSS para la imagen
            />
            <div className={styles.infoimgstyles}>
              <div className={styles.titleimginfo}>
                {' '}
                <p style={{ fontWeight: '600', fontSize: '20px' }}>
                  Portafolio antiguo
                </p>
              </div>
              <div className={styles.skillitemdiv}>
                <span className="skill-item ">React</span>
                <span className="skill-item ">sass</span>
                <span className="skill-item ">html</span>
                <span className="skill-item ">Others frameworks</span>
              </div>

              <div className="description item">
                Mi anterior portafolio de desarrollador, destacando por su
                integración de múltiples animaciones y efectos visuales.
              </div>
              <div className={styles.buttonaction}>
                <a href="https://josesoria.netlify.app/#/" target="blank_">
                  <span>Visit </span>
                </a>

                <a href="#">
                  <span className={styles.disabledbutton}>Github</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.divimg}>
            <StaticImage
              src={'../../assets/images/merlok.png'}
              alt={'Dream Junk'}
              layout="fixed" // Ajusta el layout (fixed, intrinsic, fill)
              className="image" // Clase CSS para la imagen
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Estilo CSS para la imagen
            />
            <div className={styles.infoimgstyles}>
              <div className={styles.titleimginfo}>
                {' '}
                <p style={{ fontWeight: '600', fontSize: '20px' }}>Merlokit</p>
              </div>
              <div className={styles.skillitemdiv}>
                <span className="skill-item ">React</span>
                <span className="skill-item ">Next14</span>
                <span className="skill-item ">Others frameworks</span>
              </div>

              <div className="description item">
                Página web desarrollada para el cliente Merlokit, completamente
                responsive y funcional. Incluye sliders dinámicos y una sección
                de contacto para facilitar la comunicación.
              </div>
              <div className={styles.buttonaction}>
                <a href="https://www.merlok.com.ar/" target="blank_">
                  <span>Visit </span>
                </a>

                <a href="#">
                  <span className={styles.disabledbutton}>Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
