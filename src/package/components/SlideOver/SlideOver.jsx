import React, { useRef } from 'react';
import { iconValid } from '../../helpers';
import { Spacer } from '../Spacer/Spacer';
import { StyledSlideOver, Header, CloseIcon, H3 } from './styles';

const SlideOver = props => {
  const {
    theme,
    selectedTheme,
    title,
    titleColor,
    closeIcon,
    closeColor,
    closeHoverColor,
    closeIconSize,
    width,
    height,
    topOffset,
    bottomOffset,
    children,
    onClose,
    visible,
    bgColor,
    mobileMode,
  } = props;

  const slideOverRef = useRef();

  const handleClose = () => {
    onClose?.();
  };

  if (visible) {
    return (
      <StyledSlideOver
        $theme={theme}
        $selectedTheme={selectedTheme}
        ref={slideOverRef}
        $width={width}
        $height={height}
        $bgColor={bgColor}
        $topOffset={topOffset}
        $bottomOffset={bottomOffset}
        $mobileMode={mobileMode}
      >
        <Header onClick={handleClose}>
          <H3 $theme={theme} $selectedTheme={selectedTheme} $titleColor={titleColor}>
            {title}
          </H3>

          <CloseIcon
            $theme={theme}
            $selectedTheme={selectedTheme}
            $closeColor={closeColor}
            $closeHoverColor={closeHoverColor}
            $closeIconSize={closeIconSize}
          >
            {iconValid(closeIcon)
              ? <i className={closeIcon} />
              : closeIcon || <i className={`fa-solid fa-chevron-${mobileMode ? 'down' : 'right'}`} />
            }
          </CloseIcon>
        </Header>

        <Spacer />

        {children}
      </StyledSlideOver>
    );
  }
};

export { SlideOver };