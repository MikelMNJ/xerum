import React, { useState } from 'react';
import { iconValid } from '../../helpers';
import { Spacer } from '../Spacer/Spacer';
import {  StyledAccordion, Section, Title, Content } from './styles';
import _ from 'lodash';

const Accordion = props => {
  const {
    theme,
    selectedTheme,
    sections,
    openDefault,
    openIcon,
    closeIcon,
    noIcon,
    callback,
    activeBGColor,
    activeHoverBGColor,
    activeTextColor,
    activeHoverTextColor,
    hoverColor,
    hoverTextColor,
    borderColor,
    iconSize,
    ...rest
  } = props;

  const [ active, setActive ] = useState(openDefault || null);

  const expandCollapse = args => {
    const { isActive, section } = args;

    if (!isActive) {
      setActive(section);
      callback?.(section);
      return;
    }

    setActive(null);
  };

  const buildAccordion = () => {
    return sections?.map((section, index) => {
      const { title, content } = section;
      const isActive = _.isEqual(section, active);
      const args = { isActive, section };

      return (
        <Section
          key={index}
          $theme={theme}
          $selectedTheme={selectedTheme}
          $iconSize={iconSize}
        >
          <Title
            $theme={theme}
            $selectedTheme={selectedTheme}
            $activeBGColor={activeBGColor}
            $activeTextColor={activeTextColor}
            $activeHoverBGColor={activeHoverBGColor}
            $activeHoverTextColor={activeHoverTextColor}
            $hoverColor={hoverColor}
            $hoverTextColor={hoverTextColor}
            $borderColor={borderColor}
            $active={isActive}
            $iconSize={iconSize}
            onClick={() => expandCollapse(args)}
          >
            {!noIcon && (
              <i className={_.isEqual(active, section)
                ? iconValid(openIcon) || 'fa-solid fa-chevron-down'
                : iconValid(closeIcon) || 'fa-solid fa-chevron-right'
              } />
            )}

            <Spacer $across={true} />

            {title}
          </Title>

          <Content
            $theme={theme}
            $selectedTheme={selectedTheme}
            $borderColor={borderColor}
            $active={isActive}
          >
            {content}
          </Content>
        </Section>
      );
    });
  };

  return (
    <StyledAccordion {...rest}>
      {buildAccordion()}
    </StyledAccordion>
  );
};

export { Accordion };