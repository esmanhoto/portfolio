import Tools from '../../Tools/Tools';
import styles from './Projects.module.css';
import { useTranslation } from 'react-i18next';

const Project1 = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['left-column']}>
      <div className={styles.title}>{t('project1.title')}</div>
      <div className={styles.text}>{t('project1.description')}</div>
      <Tools stacks={['react', 'javascript', 'typescript', 'html', 'css']} />
    </div>
  );
};

export default Project1;
