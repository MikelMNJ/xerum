import styled, { css } from 'styled-components';

export const StyledBanner = styled('div')`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr auto;
  border-radius: 0.35rem;

  ${props => props.noClose && css`grid-template-columns: 1fr;`}
  ${props => props.sharp && css`border-radius: 0;`}

  width: 100%;
  min-height: 2rem;
  color: white;
  background-color: #4d5153;
  padding: 1rem;

  i {
    color: white;
  }
`;

export const Message = styled('div')`
  display: flex;
  align-items: center;

  ${props => props.center && css`justify-content: center;`}
`;

export const Close = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 1.25rem;
    color: white;
    cursor: pointer;
  }
`;