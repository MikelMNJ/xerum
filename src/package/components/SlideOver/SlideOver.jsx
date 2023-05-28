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
  } = props;

  const slideOverRef = useRef();

  const handleClose = () => {
    slideOverRef.current?.classList.remove('slideIn');
    slideOverRef.current?.classList.add('slideOut');
    setTimeout(() => onClose?.(), 300);
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
        className='slideIn'
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
              : closeIcon || <i className='fa-solid fa-chevron-right' />
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