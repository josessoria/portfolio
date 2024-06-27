import React from 'react';
import './grid.scss';
import { StaticImage } from 'gatsby-plugin-image';

interface ImageGridProps {
  images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  console.log(images);
  return (
    <div className="container">
      <div className="grid">
        {images.map((src, index) => (
          <StaticImage key={index} alt="My Photo" className="image" src="../../assets/images/dreamjunk.png" />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
