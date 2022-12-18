
import styled, { css } from 'styled-components';
import { colors } from '../../theme';

const setButtonStyle = type => {
  if (type === 'ghost') {
    return css`
      color: ${colors.blue};
      background-color: ${colors.transparent};
      border: 0.125rem solid ${colors.blue};

      @media (hover: hover) {
        &:hover {
          background-color: ${colors.blue};
          color: ${colors.white};
        }
      }

      &:disabled {
        border: 0.125rem solid #ccc;
        background-color: ${colors.transparent};
        color: #aaa;
      }
    `;
  }

  if (type === '${colors.transparent}') {
    return css`
      color: ${colors.blue};
      background-color: ${colors.transparent};
      border: none;

      @media (hover: hover) {
        &:hover {
          background-color: ${colors.black + 10};
        }
      }

      &:disabled {
        background-color: ${colors.transparent};
        color: #aaa;
      }
    `;
  }
}

export const StyledButton = styled('button')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
  border-radius: 0.35rem;
  min-width: 7rem;
  height: 3rem;
  padding: 0.5rem 2rem;
  background-color: ${colors.blue};
  color: ${colors.white};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${colors.darkBlue};
    }
  }

  &:disabled {
    border: none;
    background-color: #cccccc80;
    color: #666;
    cursor: not-allowed;
  }

  ${props => setButtonStyle(props.btnType)}
`;