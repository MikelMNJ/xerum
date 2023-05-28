import React, { Fragment } from 'react';
import { Spacer } from '../Spacer/Spacer';
import { iconValid } from '../../helpers';
import { StyledSocial, SocialLink, SocialTooltip } from './styles';

const Social = props => {
  const {
    theme,
    selectedTheme,
    networks,
    noText,
    column,
    asTooltip,
    tipPosition,
    color,
    hoverColor,
    textSize,
    iconSize,
  } = props;

  const buildSocial = () => {
    return networks?.map((network, index) => {
      if (asTooltip) {
        return (
          <Fragment key={index}>
            <SocialLink
              key={index}
              $theme={theme}
              $selectedTheme={selectedTheme}
              href={network.path || '' }
              target='_blank'
              rel='noreferrer'
              $column={column}
              $color={color}
              $hoverColor={hoverColor}
              $textSize={textSize}
              $iconSize={iconSize}
            >
              <SocialTooltip
                theme={theme}
                selectedTheme={selectedTheme}
                text={network.name}
                position={tipPosition}
                icon={iconValid(network.icon) || 'fa-solid fa-question-circle'}
              />
            </SocialLink>
          </Fragment>
        );
      }

      return (
        <SocialLink
          key={index}
          $theme={theme}
          $selectedTheme={selectedTheme}
          href={network.path || '' }
          target='_blank'
          rel='noreferrer'
          $column={column}
          $color={color}
          $hoverColor={hoverColor}
          $textSize={textSize}
          $iconSize={iconSize}
        >
          <i className={iconValid(network.icon) ||  'fa-solid fa-question-circle'} />
          <Spacer size={0.25} across={!column} />
          {(!noText && network.name) && network.name}
        </SocialLink>
      );
    });
  };

  return (
    <StyledSocial>
      {buildSocial()}
    </StyledSocial>
  );
};

export { Social };