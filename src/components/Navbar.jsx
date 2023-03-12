import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import brazil from '../images/brazil_flag.png';
import usa from '../images/usa_flag.png';
import finland from '../images/finland_flag.png';
import { changeColor } from '../utils/colors';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles.container}>
      <div className={styles['flags-container']}>
        <span className={styles['select-idiom']}>Select</span>
        <img
          src={usa}
          className={styles.flag}
          onClick={() => changeLanguage('en')}
          alt="american flag"
        />
        <img
          src={finland}
          className={styles.flag}
          onClick={() => changeLanguage('fi')}
          alt="finnish flag"
        />
        <img
          src={brazil}
          className={styles.flag}
          onClick={() => changeLanguage('pt')}
          alt="brazilian flag"
        />
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span className={`${styles.number} ${changeColor()}`}>01.</span>{' '}
            {t('navbar.home')}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span className={`${styles.number} ${changeColor()}`}>02.</span>{' '}
            {t('navbar.skills')}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span className={`${styles.number} ${changeColor()}`}>03.</span>{' '}
            {t('navbar.projects')}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span className={`${styles.number} ${changeColor()}`}>04.</span>{' '}
            {t('navbar.contact')}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
