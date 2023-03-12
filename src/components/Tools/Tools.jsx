import styles from './Tools.module.css';
import reactIcon from '../../images/logo-react.png';
import javascriptIcon from '../../images/logo-javascript.svg';
import typescriptIcon from '../../images/logo-typescript.svg';
import cssIcon from '../../images/logo-css.png';
import htmlIcon from '../../images/logo-html.png';
import pythonIcon from '../../images/logo-python.svg';
import rubyIcon from '../../images/logo-ruby.png';
import { useTranslation } from 'react-i18next';

const Tools = (props) => {
  const { t } = useTranslation();
  const icons = {
    react: reactIcon,
    javascript: javascriptIcon,
    typescript: typescriptIcon,
    css: cssIcon,
    html: htmlIcon,
    python: pythonIcon,
    ruby: rubyIcon,
  };

  return (
    <div>
      <div className={styles.title}>{t('tools')}</div>
      <div className={styles.icons}>
        {props.stacks.map((stack, index) => {
          const src = icons[stack];
          return <img src={src} alt={stack} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Tools;
