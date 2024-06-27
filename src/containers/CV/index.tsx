import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'gatsby';
import { groupBy, capitalize } from 'lodash';
import classNames from 'classnames';
import { OutboundLink, trackCustomEvent } from 'gatsby-plugin-google-analytics';

import ExperienceItem from '../../components/ExperienceItem';
import { mergeExperienceWithSkills, parseQuery } from './helpers';
import SkillList from '../SkillList';

import GitHubSVG from '../../assets/icons/github.svg';
import Location from '../../assets/icons/location.svg';
import TwitterSVG from '../../assets/icons/twitter.svg';
import MailSVG from '../../assets/icons/mail.svg';
import PrinterSVG from '../../assets/icons/printer.svg';
import Phone from '../../assets/icons/phone.svg';
import Lnkdn from '../../assets/icons/linkedin.svg';
import QRWebPSVG from '../../assets/images/qr.webp';
import QRJpegSVG from '../../assets/images/qr.jpg';
import faq from '../../../content/faq.json';
import experience from '../../../content/experience.json';
import skills from '../../../content/skills.json';

import * as styles from './cv.module.scss';

const CVPaper = () => {
  const [highlightedSkillKey, onChangeHighlightedSkillKey] = useState<
    string | undefined
  >();
  const componentRef = useRef<HTMLElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleBackPress = () => {
    trackCustomEvent({
      category: 'engagement',
      action: 'go_back',
      label: 'Back to home',
    });
  };

  const handlePrintPress = () => {
    trackCustomEvent({
      category: 'engagement',
      action: 'generate_lead',
      label: 'Print CV',
    });

    handlePrint && handlePrint();
  };

  const extendedExperienceList = experience.map((el) =>
    mergeExperienceWithSkills(el, skills as SkillItem[])
  );
  const groupedSkills = groupBy<SkillItem>(skills as SkillItem[], 'category');

  return (
    <div>
      <nav
        className={classNames(styles.printButtonContainer, styles.flexCenter)}
      >
        <Link to="/" onClick={handleBackPress}>
          ⟵ Back to main
        </Link>
        <button className={styles.printButton} onClick={handlePrintPress}>
          <PrinterSVG />
          Click to print / Save PDF
        </button>
      </nav>
      <main className={styles.paper} ref={componentRef}>
        <section className={styles.basicInfo}>
          <div className={styles.title}>
            <h1>José Soria </h1>
            <h2>lead software engineer & Fullstack Developer</h2>
          </div>
          <div className={styles.contacts}>
            {[
              {
                link: 'https://github.com/josessoria',
                label: 'Josessoria',
                title: 'My GitHub',
                icon: <GitHubSVG />,
              },
              {
                link: 'mailto:josesoriap21@gmail.com',
                label: 'josesoriap21@gmail.com',
                title: 'Email address',
                icon: <MailSVG />,
              },
              {
                link: 'https://www.linkedin.com/in/josessoria/',
                label: 'linkedin.com/in/josessoria/',
                title: 'My Linkedin',
                icon: <Lnkdn />,
              },
              {
                label: '3816100078',
                title: 'My Number',
                icon: <Phone />,
              },
              {
                label: 'Tucumán, Argentina',
                title: 'Tucuman, Argentina',
                icon: <Location />,
              },
            ].map(({ icon, link, label, title }) => (
              <OutboundLink
                aria-label={title}
                key={label}
                className={classNames(
                  styles.contactItem,
                  styles.flexCenter,
                  'secondary-text'
                )}
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <span>{label}</span>
                {icon}
              </OutboundLink>
            ))}
          </div>
        </section>
        <section className={styles.mainInfo}>
          <section className={styles.mainInfoLeft}>
            <article>
              <h3 className="section-title ">Experience</h3>
              {extendedExperienceList.slice(0, 3).map((el) => (
                <ExperienceItem
                  {...el}
                  key={el.startDate.toString()}
                  onHoverSkill={onChangeHighlightedSkillKey}
                  highlightedSkillKey={highlightedSkillKey}
                />
              ))}
              {extendedExperienceList.slice(3).map((el) => (
                <ExperienceItem
                  {...el}
                  key={el.startDate.toString()}
                  isOld
                  onHoverSkill={onChangeHighlightedSkillKey}
                  highlightedSkillKey={highlightedSkillKey}
                />
              ))}
            </article>
            <article>
              <h3 className="section-title">Personality</h3>
              <p className="text">
                Desde la infancia, me han dicho que tengo una de&nbsp;
                <span className="highlighted">
                  sed constante de conocimiento
                </span>
                y una habilidad para aprender rápidamente en áreas que me
                interesan.&nbsp;
                <span className="highlighted">
                  No me gustan las tareas rutinarias
                </span>
                , generalmente suelo llamar la atención de manera positiva&nbsp;
              </p>
              <p className="text">
                <span className="highlighted">
                  no me gusta que todo sea obvio
                </span>
                , sin importar de qué se trate ― una película, una canción o
                incluso un chiste. Todo debería estimular la actividad
                mental.&nbsp;
                <span className="highlighted">
                  Me encanta ser mi mejor version
                </span>
                &nbsp;Siempre me encuentro en constante crecimiento personal,
                como ir al gimnasio, desarrollar habilidades nuevas o aprender
                nuevas tecnologías&nbsp;
              </p>
            </article>
            <article>
              <h3 className="section-title">Ambitions</h3>
              <p className="text">
                No tenía ni 14 años cuando y aquería formar una&nbsp;
                <span className="highlighted">empresa</span>&nbsp; organizar,
                expandir y&nbsp;
                <span className="highlighted">
                  ver crecer mi emprendimiento
                </span>
                , me gusta la idea de &nbsp;
                <span className="highlighted">generar dinero</span>, y me gusta
                la manera de llegar a el.&nbsp;
                <span className="highlighted">También</span>, me gustaría poder
                enseñar como lo hice y como hacerlo, el hecho de enseñar siempre
                fue mi pasion
              </p>
            </article>
          </section>
          <section className={styles.mainInfoRight}>
            <article>
              <h3 className="section-title ">Skills</h3>
              {Object.entries(groupedSkills).map(([groupName, groupSkills]) => (
                <div key={groupName} className={styles.skillsGroup}>
                  <h4 className="label">{capitalize(groupName)}</h4>
                  <SkillList
                    skills={groupSkills}
                    onHoverSkill={onChangeHighlightedSkillKey}
                    highlightedSkillKey={highlightedSkillKey}
                  />
                </div>
              ))}
            </article>
             <article>
              <h3 className="section-title ">Education</h3>
              <div className={styles.educationItem}>

                  <h4 className="label">Autodidacta</h4>
                  <p className="text">2020 - Present</p>

                <h4 className="label">Soy Henry</h4>
                <p className="text">Abr 2022 - Sep 2022</p>
              </div>
              <div className={styles.educationItem}>
                <h4 className="label">CoderHouse</h4>
                <p className="text">Mar 2022 - Abr 2022</p>
              </div>
            </article> 
          </section>
        </section>
      </main>
    </div>
  );
};

export default CVPaper;
