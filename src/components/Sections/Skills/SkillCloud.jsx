import React, { useEffect } from 'react';
import i18n from 'i18next';
import { changeColor } from '../../../utils/colors';

const skills = [
  'Javascript',
  'TypeScript',
  'Python',
  'Ruby on Rails',
  'Django',
  'Git',
  'HTML',
  'CSS',
  'TailWind',
  'BootStrap',
  'ReactJS',
  'Data Science',
  'Statistics',
  'Logics',
];

const SkillCloud = () => {
  const currentLanguage = i18n.language;
  const textColorChange = () => {
    switch (currentLanguage) {
      case 'pt':
        return 'rgba(246, 29, 29, 0.8)';
      case 'fi':
        return '#5450F9';
      case 'en':
        return '#08fdd8';
      default:
        return '#59be99';
    }
  };

  useEffect(() => {
    console.log('Loading TagCanvas...');

    const TagCanvas = window.TagCanvas;
    try {
      TagCanvas.Start('myCanvas', 'tags', {
        // textColour: '#08fdd8',
        // textColour: changeColor(),
        textColour: textColorChange(),
        // outlineColour: "#ff00ff",
        reverse: false,
        depth: 0.5,
        maxSpeed: 0.1,
      });
    } catch (e) {
      console.log('Canvas error.');
      console.log(e);
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  }, [currentLanguage]);

  return (
    <>
      <div id="myCanvasContainer">
        <canvas width="500" height="500" id="myCanvas">
          <p>
            Anything in here will be replaced on browsers that do not support
            the canvas element
          </p>
        </canvas>
      </div>
      <div id="tags">
        <ul>
          {skills.map((skill, index) => {
            return (
              <li key={index}>
                <a href="/">{skill}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SkillCloud;
