import React, { Fragment, useRef, forwardRef } from 'react';
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

const Modal = forwardRef((props, externalRef) => {
  const {
    theme,
    selectedTheme,
    titleText,
    titleColor,
    text,
    textColor,
    bgClose,
    bgColor,
    buttonType,
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
    confirmDisabled,
    blank,
    cancelText,
    cancelButtonIcon,
    cancelButtonColor,
    cancelButtonTextColor,
    cancelButtonHoverColor,
    useOverflow,
    mobileMode,
    pill,
    round,
    privacy,
  } = props;

  const modalRef = useRef();
  const bgRef = useRef();

  if (!visible) return null;

  return (
    <Fragment>
      <ModalBG
        $theme={theme}
        $selectedTheme={selectedTheme}
        ref={bgRef}
        onClick={() => bgClose && onClose?.()}
      />

      <StyledModal
        ref={element => {
          if (externalRef) externalRef.current = element;
          modalRef.current = element;
        }}
        $theme={theme}
        $selectedTheme={selectedTheme}
        $bgColor={bgColor}
        $confirm={confirm}
        $textColor={textColor}
        $useOverflow={useOverflow}
      >
        <ModalHeader $confirm={confirm}>
          <Title $theme={theme} $selectedTheme={selectedTheme} $titleColor={titleColor}>
            {titleText}
          </Title>

          <CloseButton $theme={theme} $selectedTheme={selectedTheme} $titleColor={titleColor}>
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

        <ConfirmButtons $visible={confirm && !blank} $mobileMode={mobileMode}>
          <ButtonWrapper>
            <Spacer />

            <Button
              theme={theme}
              selectedTheme={selectedTheme}
              type={buttonType || 'button'}
              text={confirmText || 'Confirm'}
              icon={iconValid(confirmButtonIcon)}
              color={confirmButtonColor}
              hoverColor={confirmButtonHoverColor}
              textColor={confirmButtonTextColor}
              disabled={privacy || confirmDisabled}
              pill={pill}
              round={round}
              callback={() => onConfirm?.()}
            />

            {!mobileMode && <Spacer />}
          </ButtonWrapper>

          <ButtonWrapper>
            {!mobileMode && <Spacer />}

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

        {blank && <Spacer />}
      </StyledModal>
    </Fragment>
  );
});

export { Modal };