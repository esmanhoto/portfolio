import React, { useState, useEffect } from 'react';
import styles from './Skills.module.css';
import SkillCloud from './SkillCloud';
import { useTranslation } from 'react-i18next';
import { changeColor, changeBackgroundColor } from '../../../utils/colors';
import downArrow from '../../../images/down-arrow.svg';

const Skills = (props) => {
  const { t } = useTranslation();
  const [selectedSkills, setSelectedSkills] = useState([]);

  const listOfSkills = [
    // weight from 1 to 3
    {
      name: 'ReactJs',
      weight: 3,
    },
    {
      name: 'JavaScript',
      weight: 3,
    },
    {
      name: 'TypeScript',
      weight: 3,
    },
    {
      name: 'CSS/HTML',
      weight: 2,
    },
    {
      name: 'Ruby on Rails',
      weight: 3,
    },
    {
      name: 'Python',
      weight: 3,
    },
    {
      name: 'Git',
      weight: 2,
    },
    {
      name: 'Data Science',
      weight: 3,
    },
    {
      name: 'Angular/Vue',
      weight: 3,
    },
    {
      name: 'GoLang',
      weight: 3,
    },
    {
      name: 'Java',
      weight: 3,
    },
    {
      name: 'C/C#',
      weight: 3,
    },
    {
      name: 'Swift',
      weight: 3,
    },
    {
      name: 'Kotlin',
      weight: 3,
    },
    {
      name: 'React Native',
      weight: 3,
    },
    {
      name: 'Other',
      weight: 2,
    },
  ];

  const mySkills = [
    // score from 1 to 5
    {
      name: 'ReactJs',
      score: 5,
    },
    {
      name: 'JavaScript',
      score: 5,
    },
    {
      name: 'TypeScript',
      score: 5,
    },
    {
      name: 'CSS/HTML',
      score: 5,
    },
    {
      name: 'Ruby on Rails',
      score: 3,
    },
    {
      name: 'Python',
      score: 4,
    },
    {
      name: 'Git',
      score: 5,
    },
    {
      name: 'Data Science',
      score: 4,
    },
  ];

  const selectSkill = (skill) => {
    let skillsArray = selectedSkills.slice();
    const skillIndex = skillsArray.indexOf(skill);

    if (skillIndex > -1) {
      skillsArray = skillsArray.filter((item) => item !== skill);
    } else {
      skillsArray = skillsArray.concat(skill);
    }

    setSelectedSkills(skillsArray);
    // console.log('selected skills array', skillsArray);
  };

  function calculateMatchPercentage(selectedSkills, mySkills, listOfSkills) {
    let totalWeight = 0;
    let weightedScore = 0;

    selectedSkills.forEach((skillName) => {
      const skill = listOfSkills.find((s) => s.name === skillName);
      if (skill) {
        const { weight } = skill;
        const matchingSkill = mySkills.find((s) => s.name === skillName);
        if (matchingSkill) {
          const score = matchingSkill.score;
          totalWeight += weight;
          weightedScore += weight * (score / 5);
        } else {
          totalWeight += weight;
        }
      }
    });

    if (totalWeight === 0) {
      return 0;
    }

    const matchPercentage = Math.round((weightedScore / totalWeight) * 100);
    return matchPercentage;
  }

  useEffect(() => {
    const result = calculateMatchPercentage(
      selectedSkills,
      mySkills,
      listOfSkills
    );
    props.setMatchPercentage(result);
  }, [selectedSkills]);

  const backgroundColorClass = changeBackgroundColor();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content} id="skillsSection">
          <div className={styles.title}>
            <span className={`${styles['green-text']} ${changeColor()}`}>
              {t('skills.title.highlighted')}
            </span>
            {t('skills.title.remaining')}
          </div>
          <div className={styles.description}>
            {t('skills.description.partOne')}
            <span className={styles['green-text']}>
              {t('skills.description.highlighted')}
            </span>
            {t('skills.description.partTwo')}
          </div>
          <div className={styles.selections}>
            {listOfSkills.map((skill, index) => {
              return (
                <label
                  htmlFor={skill.name}
                  className={styles.option}
                  key={index}
                >
                  {skill.name}
                  <input
                    type="checkbox"
                    id={skill.name}
                    name={skill.name}
                    onClick={() => selectSkill(skill.name)}
                  />
                  <span
                    className={`${styles['new-checkbox']} ${styles[backgroundColorClass]}`}
                  ></span>
                </label>
              );
            })}
          </div>
        </div>
        <div className={styles.skillcloud}>
          <SkillCloud />
        </div>
      </div>
      <div className={styles['down-arrow']}>
        <img
          src={downArrow}
          className={styles['down-arrow-icon']}
          alt="down arrows"
        />
      </div>
    </div>
  );
};

export default Skills;
