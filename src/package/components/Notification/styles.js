import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled, { css } from 'styled-components';

const colors = theme.colors;

export const StyledNotifications = styled('div')`
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  margin: 1rem;
`;

export const StyledNotification = styled('div')`
  position: relative;
  right: 0;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 2rem 1fr 1rem;
  margin: 0.5rem;
  z-index: 10;

  font-size: 0.9rem;
  padding: 0.75rem;
  width: 20rem;
  height: fit-content;
  min-height: 4.5rem;
  border-radius: 0.35rem;
  ${props => hexValid(props.textColor) && css`color: ${props.textColor};`}
  border-left: 0.5rem solid ${props => (
    hexValid(props.borderColor) || getColor(props, 'accent', colors.black)
  )};
  background-color: ${props => (
    hexValid(props.bgColor) || getColor(props, 'primary', colors.white)
  )};
  box-shadow: 0 0.1rem 0.15rem #00000080;

  ${props => props.noIcons && css`grid-template-columns: 1fr 1rem;`}

  ${props => props.type === 'success' && css`
    border-left: 0.5rem solid ${
      hexValid(props.borderColor) || getColor(props, 'success', colors.success)
    };
  `}

  ${props => props.type === 'warning' && css`
    border-left: 0.5rem solid ${
      hexValid(props.borderColor) || getColor(props, 'warning', colors.warning)
    };
  `}

  ${props => props.type === 'error' && css`
    border-left: 0.5rem solid ${
      hexValid(props.borderColor) || getColor(props, 'error', colors.error)
    };
  `}
`;

export const Icon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const StyledMessage = styled('div')`
  display: flex;
  align-items: center;
`;

export const Close = styled('div')`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  font-size: 1.15rem;

  i {
    padding: 0;
    cursor: pointer;
  }
`;