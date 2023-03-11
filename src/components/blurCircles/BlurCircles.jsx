import React, { useEffect } from 'react';
import { changeBackgroundColor } from '../../utils/colors';
import styles from './BlurCircles.module.css';
import { useTranslation } from 'react-i18next';

const BlurCircles = () => {
  const { i18n } = useTranslation();
  let backgroundColorClass = changeBackgroundColor();

  useEffect(() => {
    backgroundColorClass = changeBackgroundColor();
  }, [i18n.language]);

  return (
    <>
      <div
        className={`${styles['blur-circle']} ${styles['blur-circle--1']} ${styles[backgroundColorClass]}`}
      />
      <div
        className={`${styles['blur-circle']} ${styles['blur-circle--2']} ${styles[backgroundColorClass]}`}
      />
      <div
        className={`${styles['blur-circle']} ${styles['blur-circle--3']} ${styles[backgroundColorClass]}`}
      />
      <div
        className={`${styles['blur-circle']} ${styles['blur-circle--4']} ${styles[backgroundColorClass]}`}
      />
    </>
  );
};

export default BlurCircles;
