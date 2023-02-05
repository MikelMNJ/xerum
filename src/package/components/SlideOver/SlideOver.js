import React, { useRef } from 'react';
import { iconValid } from '../../helpers';
import { Spacer } from '../Spacer/Spacer';
import { StyledSlideOver, Header, CloseButton, H3 } from './styles';

const SlideOver = props => {
  const {
    theme,
    selectedTheme,
    title,
    titleColor,
    closeIcon,
    closeColor,
    closeHoverColor,
    children,
    onClose,
    visible,
    bgColor,
    ...rest
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
        theme={theme}
        selectedTheme={selectedTheme}
        ref={slideOverRef}
        bgColor={bgColor}
        className='slideIn'
        {...rest}
      >
        <Header>
          <H3
            theme={theme}
            selectedTheme={selectedTheme}
            titleColor={titleColor}
          >
            {title}
          </H3>

          <CloseButton
            theme={theme}
            selectedTheme={selectedTheme}
            icon={iconValid(closeIcon) || 'fa-solid fa-arrow-right-long'}
            btnType='transparent'
            noText={true}
            closeColor={closeColor}
            closeHoverColor={closeHoverColor}
            callback={handleClose}
          />
        </Header>

        <Spacer />

        {children}
      </StyledSlideOver>
    );
  }
};

export { SlideOver };