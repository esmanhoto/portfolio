import Button from '../../Button';
import styles from './Contact.module.css';
import Progress from './Progress';
import instagram from '../../../images/instagram.png';
import github from '../../../images/github.png';
import linkedIn from '../../../images/linkedIn.png';
import { useTranslation } from 'react-i18next';
import { changeColor } from '../../../utils/colors';

const Contact = (props) => {
  const { t } = useTranslation();

  const handleAdjective = () => {
    const value = props.matchPercentage;
    switch (true) {
      case value > 90:
        return t('contact.adjectives.best');
      case value > 70:
        return t('contact.adjectives.good');
      case value > 50:
        return t('contact.adjectives.ok');
      default:
        return t('contact.adjectives.bad');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles['left-column']}>
        <div className={styles['title']}>
          {t('contact.title.start')}
          <span className={changeColor()}>
            {t('contact.title.highlighted')}
          </span>
          ?
        </div>
        <div className={styles['content']}>
          {t('contact.content.partOne')}
          <span className={changeColor()}>{handleAdjective()}</span>{' '}
          {props.matchPercentage}
          {t('contact.content.partTwo')}
        </div>
        <div className={styles['circle-progress']}>
          <Progress matchPercentage={props.matchPercentage} />
        </div>
      </div>
      <div></div>
      <div className={styles['right-column']}>
        <div className={styles['title']}>{t('contact.subtitle.main')}</div>
        <div className={styles['content']}>
          {t('contact.subtitle.description')}
        </div>
        <a
          className={styles['button']}
          href="https://calendly.com/eduardo_esmanhoto/interview"
        >
          <Button text={t('button.scheduleMeeting')} />
        </a>
        <div className={styles['logos']}>
          <a href="https://www.linkedin.com/in/esmanhoto/">
            <img src={linkedIn} alt="linkedIn logo" className={styles.logo} />
          </a>
          <a href="https://github.com/esmanhoto">
            <img src={github} alt="github logo" className={styles.logo} />
          </a>
          <a href="https://instagram.com/esmanha?igshid=ZDdkNTZiNTM=">
            <img src={instagram} alt="instagram logo" className={styles.logo} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
