import React from 'react';
import { Spacer } from '../Spacer/Spacer';
import { Reqs, ReqsLi, Icon } from './styles';
import _ from 'lodash';

const FieldReqs = props => {
  const {
    theme,
    selectedTheme,
    value,
    upper,
    lower,
    number,
    min,
    special,
    exclude,
    color,
    exColor,
    bgColor,
  } = props;

  const length = Number.isInteger(min) ? min : 8;
  const specialChars = typeof special === 'string' ? special : '@#$%^&+=!';
  const test = testVal => new RegExp(`^(?=.*[${testVal}]).*$`).test(value ?? '');

  const loadIcon = (type, localVal) => {
    const local = localVal?.toLowerCase();
    const workingVal = value?.toLowerCase();
    const exclusion = type === 'exclude';
    let valid = false;

    if (
      (type === 'number' && test('0-9')) ||
      (type === 'min' && value?.length >= length) ||
      (type === 'uppercase' && test('A-Z')) ||
      (type === 'lowercase' && test('a-z')) ||
      (type === 'special' && test(specialChars)) ||
      (exclusion && !workingVal?.includes(local))
    ) valid = true;

    return (
      <Icon
        $theme={theme}
        $selectedTheme={selectedTheme}
        className={`fa-solid fa-${exclusion ? 'exclamation-circle' : 'check-circle'}`}
        $exclusion={exclusion}
        $valid={valid}
        $bgColor={bgColor}
        $color={color}
        $exColor={exColor}
      />
    );
  };

  const buildRequirements = () => {
    const renderContent = [];

    const addContent = (type, text, localVal) => {
      renderContent.push(
        <ReqsLi key={text}>
          <Spacer across={true} size={0.5} />
          {loadIcon(type, localVal)}

          {text}
        </ReqsLi>,
      );
    };

    if (upper) addContent('uppercase', 'Uppercase');
    if (lower) addContent('lowercase', 'Lowercase');
    if (number) addContent('number', 'Number');
    if (min) addContent('min', `${length} Minimum`);
    if (special) addContent('special', `Special: ${specialChars.split('').join(' ')}`);

    if (!_.isEmpty(exclude)) {
      exclude.forEach(exclusion => {
        const { display, value } = exclusion;

        if (display && value) {
          addContent('exclude', display, value);
        }
      });
    }

    return renderContent;
  };

  return (
    <Reqs>
      {buildRequirements()}
    </Reqs>
  );
};

export { FieldReqs };