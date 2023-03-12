import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import RadialSeparators from './RadialSeparators.js';
import 'react-circular-progressbar/dist/styles.css';
import styles from './Progress.module.css';
import { changeColor } from '../../../utils/colors';

const Progress = (props) => {
  const percentage = props.matchPercentage;

  const handleColor = () => {
    switch (changeColor()) {
      case 'green':
        return '#59be99';
      case 'blue':
        return '#5450f9';
      case 'red':
        return 'rgba(246, 29, 29, 0.9)';
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <CircularProgressbarWithChildren
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={6}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathColor: `${handleColor()}`,
          textColor: `${handleColor()}`,
          trailColor: '#87888b',
        })}
      >
        <RadialSeparators
          count={12}
          style={{
            background: '#87888b',
            width: '2px',
            height: `${6}%`,
          }}
        />
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Progress;
