import React, { useRef, forwardRef } from 'react';
import { iconValid } from '../../helpers';
import { Spacer } from '../Spacer/Spacer';
import { StyledSlideOver, Header, CloseIcon, H3 } from './styles';

const SlideOver = forwardRef((props, externalRef) => {
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
    zIndex,
  } = props;

  const slideOverRef = useRef();

  const handleClose = () => {
    onClose?.();
  };

  if (visible) {
    return (
      <StyledSlideOver
        ref={element => {
          if (externalRef) externalRef.current = element;
          slideOverRef.current = element;
        }}
        $theme={theme}
        $selectedTheme={selectedTheme}
        $width={width}
        $height={height}
        $bgColor={bgColor}
        $topOffset={topOffset}
        $bottomOffset={bottomOffset}
        $mobileMode={mobileMode}
        $zIndex={zIndex}
      >
        <Header>
          <H3 $theme={theme} $selectedTheme={selectedTheme} $titleColor={titleColor}>
            {title}
          </H3>

          <CloseIcon
            $theme={theme}
            $selectedTheme={selectedTheme}
            $closeColor={closeColor}
            $closeHoverColor={closeHoverColor}
            $closeIconSize={closeIconSize}
            onClick={handleClose}
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
});

export { SlideOver };