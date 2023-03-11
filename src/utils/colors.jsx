import i18n from 'i18next';

export const changeColor = () => {
  const currentLanguage = i18n.language;

  switch (currentLanguage) {
    case 'en':
      return 'green';
    case 'fi':
      return 'blue';
    case 'pt':
      return 'red';
    default:
      return 'red';
  }
};

export const changeBorderColor = () => {
  const currentLanguage = i18n.language;

  switch (currentLanguage) {
    case 'en':
      return 'green-border';
    case 'fi':
      return 'blue-border';
    case 'pt':
      return 'red-border';
    default:
      return 'red-border';
  }
};

export const changeBackgroundColor = () => {
  const currentLanguage = i18n.language;

  switch (currentLanguage) {
    case 'en':
      return 'green-background';
    case 'fi':
      return 'blue-background';
    case 'pt':
      return 'red-background';
    default:
      return 'red-background';
  }
};
