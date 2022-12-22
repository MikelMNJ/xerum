import React, { Fragment, useRef } from 'react';
import { iconValid, hexValid } from '../../helpers';
import { StyledModal, ModalBG, ModalHeader, Title, CloseButton } from './styles';
import { Button } from '../Button/Button';
import { Spacer } from '../Spacer/Spacer';

const Modal = props => {
  const {
    theme,
    selectedTheme,
    title,
    titleColor,
    bgClose,
    closeIcon,
    onClose,
    children,
    ...rest
  } = props;

  const ref = useRef();
  const bgRef = useRef();

  return (
    <Fragment>
      <ModalBG
        theme={theme}
        selectedTheme={selectedTheme}
        ref={bgRef}
        onClick={() => bgClose && onClose?.()}
      />

      <StyledModal
        theme={theme}
        selectedTheme={selectedTheme}
        ref={ref}
        {...rest}
      >
        <ModalHeader className='header'>
          <Title theme={theme} selectedTheme={selectedTheme} titleColor={titleColor}>
            {title}
          </Title>

          <CloseButton titleColor={titleColor}>
            <Button
              theme={theme}
              selectedTheme={selectedTheme}
              noText={true}
              icon={closeIcon || iconValid('fa-solid fa-xmark')}
              btnType='transparent'
              callback={() => onClose?.()}
            />
          </CloseButton>
        </ModalHeader>

        <Spacer />

        {children}
      </StyledModal>
    </Fragment>
  );
};

export { Modal };