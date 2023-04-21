import React, { Fragment, useRef } from 'react';
import { iconValid } from '../../helpers';
import {
  StyledModal,
  ModalBG,
  ModalHeader,
  Title,
  CloseButton,
  ConfirmButtons,
  ConfirmText,
  ButtonWrapper,
} from './styles';
import { Button } from '../Button/Button';
import { Spacer } from '../Spacer/Spacer';

const Modal = props => {
  const {
    theme,
    selectedTheme,
    titleText,
    titleColor,
    text,
    textColor,
    bgClose,
    bgColor,
    closeIcon,
    onClose,
    children,
    visible,
    confirm,
    onConfirm,
    confirmText,
    confirmButtonIcon,
    confirmButtonColor,
    confirmButtonTextColor,
    confirmButtonHoverColor,
    cancelText,
    cancelButtonIcon,
    cancelButtonColor,
    cancelButtonTextColor,
    cancelButtonHoverColor,
    pill,
    round,
    ...rest
  } = props;

  const ref = useRef();
  const bgRef = useRef();

  if (!visible) return null;

  return (
    <Fragment>
      <ModalBG
        theme={theme}
        selectedTheme={selectedTheme}
        ref={bgRef}
        onClick={() => bgClose && onClose?.()}
      />

      <StyledModal
        ref={ref}
        theme={theme}
        selectedTheme={selectedTheme}
        bgColor={bgColor}
        confirm={confirm}
        textColor={textColor}
        {...rest}
      >
        <ModalHeader confirm={confirm}>
          <Title theme={theme} selectedTheme={selectedTheme} titleColor={titleColor}>
            {titleText}
          </Title>

          <CloseButton theme={theme} selectedTheme={selectedTheme} titleColor={titleColor}>
            <Button
              theme={theme}
              selectedTheme={selectedTheme}
              noText={true}
              icon={iconValid(closeIcon) || 'fa-solid fa-xmark'}
              buttonType='transparent'
              callback={() => onClose?.()}
            />
          </CloseButton>
        </ModalHeader>

        <Spacer />

        {text ? <ConfirmText>{text}</ConfirmText> : children}

        <ConfirmButtons visible={confirm}>
          <ButtonWrapper>
            <Spacer />

            <Button
              theme={theme}
              selectedTheme={selectedTheme}
              text={confirmText || 'Confirm'}
              icon={iconValid(confirmButtonIcon)}
              color={confirmButtonColor}
              hoverColor={confirmButtonHoverColor}
              textColor={confirmButtonTextColor}
              pill={pill}
              round={round}
              callback={() => onConfirm?.()}
            />

            <Spacer />
          </ButtonWrapper>

          <ButtonWrapper>
            <Spacer />

            <Button
              theme={theme}
              selectedTheme={selectedTheme}
              text={cancelText || 'Cancel'}
              icon={iconValid(cancelButtonIcon)}
              color={cancelButtonColor || confirmButtonColor}
              hoverColor={cancelButtonHoverColor || confirmButtonHoverColor}
              textColor={cancelButtonTextColor || confirmButtonTextColor}
              pill={pill}
              round={round}
              buttonType='ghost'
              callback={() => onClose?.()}
            />

            <Spacer />
          </ButtonWrapper>
        </ConfirmButtons>
      </StyledModal>
    </Fragment>
  );
};

export { Modal };