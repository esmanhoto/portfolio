import React from 'react';
import styles from './HeroSection.module.css';
import downArrow from '../../../images/down-arrow.svg';
import Button from '../../Button';
import { useTranslation } from 'react-i18next';
import { changeColor } from '../../../utils/colors';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles['header-text']}>{t('hero.header.greeting')}</div>
        <div className={styles['header-text']}>
          {t('hero.header.name')} <span className={changeColor()}>Eduardo</span>
          ,
        </div>
        <div className={styles['header-text']}>{t('hero.header.title')}</div>
      </div>
      <div className={styles.subheader}>
        <div className={styles['subheader-text']}>
          {t('hero.subheader.partOne')}
          <span className={changeColor()}>
            {t('hero.subheader.highlighted')}
          </span>
          {t('hero.subheader.partTwo')}
        </div>
      </div>
      <div className={styles['text-and-cta']}>
        <div className={styles['subheader-text']}>
          {t('hero.additional.partOne')}
          <span className={changeColor()}>
            {t('hero.additional.highlighted')}
          </span>
          {t('hero.additional.partTwo')}
        </div>
        <Button text={t('button.scheduleMeeting')} />
      </div>
      <div className={styles['down-arrow']}>
        <img src={downArrow} className={styles['down-arrow-icon']} />
      </div>
    </div>
  );
};

export default HeroSection;
