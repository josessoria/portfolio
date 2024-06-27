import React from 'react';
import { StaticImage } from 'gatsby';
import { Link } from 'gatsby';
import styles from '../../containers/Home/home.module.scss'; // Asegúrate de tener definidos tus estilos

const TuComponente = ({ imageInfo }) => {
  return (
    <div className={styles.divimg}>
      <StaticImage
        src={imageInfo.imageSrc}
        alt={imageInfo.altText}
        layout="fixed"
        className="image"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
      <div className={styles.infoimgstyles}>
        <div className={styles.titleimginfo}>
          <p style={{ fontWeight: '600', fontSize: '20px' }}>
            {imageInfo.title}
          </p>
          <Link to={imageInfo.pageLink} target="_blank">
            <button className={styles.printbutton}>Visit Page</button>
          </Link>
        </div>
        {imageInfo.skills.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TuComponente;
