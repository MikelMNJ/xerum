import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled, { css } from 'styled-components';

const colors = theme.colors;

export const ModalBG = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.80);
`;

export const StyledModal = styled('div')`
  ${props => props.confirm && css`
    display: flex;
    flex-direction: column;
  `}

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: 4rem auto;
  z-index: 200;
  max-height: calc(100% - 6rem);
  max-width: calc(100% - 6rem);
  min-width: 29rem;
  min-height: ${props => props.confirm ? 'fit-content' : '15rem'};
  width: max-content;
  height: max-content;
  padding: 0.5rem 1rem;
  border-radius: 0.35rem;
  overflow-y: ${props => props.useOverflow === false ? 'unset' : 'auto'};
  color: ${props => hexValid(props.textColor) || getColor(props, 'onPrimary', colors.shades.black)};
  background-color: ${props => (
    hexValid(props.bgColor) || getColor(props, 'primary', colors.shades.white)
  )};

  @media only screen and (max-width: 414px) {
    min-width: 21rem;
  }

  @media only screen and (max-width: 360px) {
    min-width: 20rem;
  }
`;

export const ModalHeader = styled('div')`
  display: ${props => props.confirm ? 'none' : 'inline-flex'};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`;

export const Title = styled('div')`
  color: ${props => (
    hexValid(props.titleColor) || getColor(props, 'onPrimary', colors.shades.black)
  )};
`;

export const CloseButton = styled('div')`
  position: relative;
  left: 0.85rem;

  i {
    font-size: 1.35rem;
    color: ${props => (
      hexValid(props.titleColor) || getColor(props, 'onPrimary', colors.shades.black)
    )}
  }
`;

export const ConfirmButtons = styled('div')`
  display: ${props => props.visible ? 'inline-flex' : 'none'};
  ${props => props.visible && css`gap: 1rem;`}
  width: 100%;
`;

export const ConfirmText = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
`;