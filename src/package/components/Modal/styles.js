import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled from 'styled-components';

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
  position: fixed;
  top: -23rem;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 200;
  max-height: calc(100% - 2rem);
  max-width: calc(100% - 2rem);
  min-width: 23rem;
  min-height: 23rem;
  width: max-content;
  height: max-content;
  padding: 0.5rem 1.25rem;
  border-radius: 0.35rem;
  background-color: ${props => getColor(props, 'primary', colors.white)};
  overflow-y: auto;

  @media only screen and (max-width: 414px) {
    min-width: 21rem;
  }

  @media only screen and (max-width: 360px) {
    min-width: 20rem;
  }
`;

export const ModalHeader = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`;

export const Title = styled('div')`
  color: ${props => (
    hexValid(props.titleColor) || getColor(props, 'accent', colors.black)
  )};
`;

export const CloseButton = styled('div')`
  position: relative;
  left: 0.85rem;

  i {
    font-size: 1.35rem;
    color: ${props => (
      hexValid(props.titleColor) || 'inherit'
    )}
  }
`;