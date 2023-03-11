import styles from './Projects.module.css';
import Tools from '../../Tools/Tools';
import { useTranslation } from 'react-i18next';
import { changeColor } from '../../../utils/colors';

const Project2 = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['left-column']}>
      <div className={styles.title}>{t('project2.title')}</div>
      <div className={styles.text}>
        {t('project2.description.partOne')}
        <span className={changeColor()}>
          {t('project2.description.highlighted')}
        </span>
        {t('project2.description.partTwo')}
      </div>
      <Tools
        stacks={['react', 'javascript', 'typescript', 'html', 'css', 'ruby']}
      />
    </div>
  );
};

export default Project2;
