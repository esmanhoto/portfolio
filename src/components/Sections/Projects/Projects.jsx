import styles from './Projects.module.css';
import capsule from '../../../images/capsula.png';
import edu from '../../../images/edu.jpg';
import i25kia from '../../../images/i25kia.png';
import crocheniacs from '../../../images/crocheniacs.png';
import leftArrow from '../../../images/left-arrow.svg';
import carouselDot from '../../../images/carousel-dot.svg';
import Project0 from './Project0';
import Project1 from './Project1';
import { useState } from 'react';
import Project2 from './Project2';
import Project3 from './Project3';
import downArrow from '../../../images/down-arrow.svg';

const Projects = () => {
  const [project, setProject] = useState(0);

  const projectSelection = () => {
    switch (project) {
      case 0:
        return <Project0 />;
      case 1:
        return <Project1 />;
      case 2:
        return <Project2 />;
      case 3:
        return <Project3 />;
      default:
        return <Project0 />;
    }
  };

  const imageSelection = () => {
    switch (project) {
      case 0:
        return edu;
      case 1:
        return capsule;
      case 2:
        return i25kia;
      case 3:
        return crocheniacs;
      default:
        return capsule;
    }
  };

  const handleClick = (diff) => {
    const newProject = (((project + diff) % 4) + 4) % 4;
    setProject(newProject);
  };

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['container-left-column']}>
          {projectSelection()}
        </div>
        <div className={styles['right-column']}>
          <div className={styles['right-column-container']}>
            <img
              src={imageSelection()}
              className={styles['project-image']}
              alt="project"
            />
            <div className={styles['carousel-arrows']}>
              <img
                src={leftArrow}
                className={styles['carousel-left-arrow']}
                onClick={() => handleClick(-1)}
                alt="right arrow"
              />
              <img
                src={carouselDot}
                className={styles['carousel-dot']}
                alt="dot"
              />
              <img
                src={carouselDot}
                className={styles['carousel-dot']}
                alt="dot"
              />
              <img
                src={carouselDot}
                className={styles['carousel-dot']}
                alt="dot"
              />
              <img
                src={carouselDot}
                className={styles['carousel-dot']}
                alt="dot"
              />
              <img
                src={leftArrow}
                className={styles['carousel-right-arrow']}
                onClick={() => handleClick(1)}
                alt="left arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['down-arrow']}>
        <img src={downArrow} className={styles['down-arrow-icon']} />
      </div>
    </>
  );
};

export default Projects;
