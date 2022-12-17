
import styled, { css } from 'styled-components';

const setButtonStyle = type => {
  if (type === 'ghost') {
    return css`
      color: #0d97ff;
      background-color: transparent;
      border: 0.125rem solid #0d97ff;

      @media (hover: hover) {
        &:hover {
          background-color: #0d97ff;
          color: white;
        }
      }

      &:disabled {
        border: 0.125rem solid #ccc;
        background-color: transparent;
        color: #aaa;
      }
    `;
  }

  if (type === 'transparent') {
    return css`
      color: #0d97ff;
      background-color: transparent;
      border: none;

      @media (hover: hover) {
        &:hover {
          background-color: #00000010;
        }
      }

      &:disabled {
        background-color: transparent;
        color: #aaa;
      }
    `;
  }
}

export const StyledButton = styled('button')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.35rem;
  width: 7rem;
  height: 3rem;
  background-color: #0d97ff;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      background-color: #005fa6;
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