import styles from './Projects.module.css';
import capsule from '../../../images/capsula.png';
import edu from '../../../images/edu.jpg';
import i25kia from '../../../images/i25kia.png';
import crocheniacs from '../../../images/crocheniacs.png';
import leftArrow from '../../../images/left-arrow.svg';
import { ReactComponent as CarouselDot } from '../../../images/carousel-dot.svg';
import Project0 from './Project0';
import Project1 from './Project1';
import { useState, useEffect } from 'react';
import Project2 from './Project2';
import Project3 from './Project3';
import downArrow from '../../../images/down-arrow.svg';
import { changeColor } from '../../../utils/colors';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const [project, setProject] = useState(0);
  const { i18n } = useTranslation();
  const [dotColor, setDotColor] = useState('#D9D9D9');

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

  const handleColors = (color) => {
    switch (color) {
      case 'green':
        return '#59be99';
      case 'red':
        return 'rgba(246, 29, 29, 0.8)';
      case 'blue':
        return '#5450f9';
      default:
        break;
    }
  };

  useEffect(() => {
    setDotColor(handleColors(changeColor()));
  }, [i18n.language]);

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
              <CarouselDot
                fill={project === 0 ? dotColor : '#D9D9D9'}
                className={styles['carousel-dot']}
              />
              <CarouselDot
                fill={project === 1 ? dotColor : '#D9D9D9'}
                className={styles['carousel-dot']}
              />
              <CarouselDot
                fill={project === 2 ? dotColor : '#D9D9D9'}
                className={styles['carousel-dot']}
              />
              <CarouselDot
                fill={project === 3 ? dotColor : '#D9D9D9'}
                className={styles['carousel-dot']}
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
        <img
          src={downArrow}
          className={styles['down-arrow-icon']}
          alt="down arrows"
        />
      </div>
    </>
  );
};

export default Projects;
