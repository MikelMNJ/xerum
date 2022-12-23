import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled, { css } from 'styled-components';

const colors = theme.colors;

export const StyledLabel = styled('label')`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  min-width: 3rem;
  min-height: 3rem;
  cursor: pointer;
  user-select: none;

  input {
    // Hides default checkbox
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

export const Box = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.75rem;
  width: 1.75rem;
  border: 0.125rem solid ${props => {
    if (props.disabled) return colors.lightGrey;
    return hexValid(props.boxColor) || getColor(props, 'accent', colors.black)
  }};
  border-radius: 0.25rem;

  ${props => props.solidFill && css`
    background-color: ${props => {
      if (props.disabled) return colors.lightGrey;
      return hexValid(props.boxColor) || getColor(props, 'accent', colors.black)
    }};
  `};
`;

export const Check = styled('i')`
  display: ${props => props.visible ? 'block' : 'none'};
  position: relative;
  color: ${props => {
    if (props.disabled) return colors.lightGrey;
    return hexValid(props.checkColor) || getColor(props, 'accent', colors.lightGrey)
  }};
  border-radius: 0.25rem;
  font-size: 1rem;

  ${props => props.solidFill && css`
    color: ${props => {
      if (props.disabled) return colors.grey;
      return hexValid(props.checkColor) || getColor(props, 'onAccent', colors.white)
    }};
  `};
`;