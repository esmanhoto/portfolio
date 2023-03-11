import styles from './Button.module.css';
import { changeBorderColor } from '../utils/colors';

const Button = (props) => {
  return (
    <button className={`${styles['button-schedule']} ${changeBorderColor()}`}>
      {props.text}
    </button>
  );
};

export default Button;
