import Button from '../../Button';
import styles from './Projects.module.css';
import { useTranslation } from 'react-i18next';
import { changeColor } from '../../../utils/colors';

const Project0 = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['left-column']}>
      <div className={styles.title}>
        {t('project0.title.main')}
        <span className={changeColor()}>{t('project0.title.highlighted')}</span>
      </div>
      <div className={styles.text}>
        {t('project0.description.partOne')}
        <span className={changeColor()}>
          {t('project0.description.highlighted')}
        </span>
        {t('project0.description.partTwo')}
      </div>
      <div className={styles.text}>{t('project0.additional')}</div>
      <div className={styles['button-schedule']}>
        <Button text={t('button.schedule')} />
      </div>
    </div>
  );
};

export default Project0;
