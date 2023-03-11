import styles from './Projects.module.css';
import Tools from '../../Tools/Tools';
import { useTranslation } from 'react-i18next';
import { changeColor } from '../../../utils/colors';

const Project3 = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['left-column']}>
      <div className={styles.title}>Crocheniacs</div>
      <div className={styles.text}>
        {t('project3.description.partOne')}
        <span className={changeColor()}>
          {t('project3.description.highlightedOne')}
        </span>
        {t('project3.description.partTwo')}
        <span className={changeColor()}>
          {t('project3.description.highlightedTwo')}
        </span>
        {t('project3.description.partThree')}
        <span className={changeColor()}>
          {t('project3.description.highlightedThree')}
        </span>
        {t('project3.description.partFour')}
      </div>
      <Tools stacks={['python']} />
    </div>
  );
};

export default Project3;
