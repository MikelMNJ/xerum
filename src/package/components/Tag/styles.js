import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled from 'styled-components';

const colors = theme.colors;

export const StyledTag = styled('div')`
  display: inline-flex;
  align-items: center;
  background-color: ${props => hexValid(props.bgColor) || getColor(props, 'accent', colors.black)};
  color: ${props => hexValid(props.textColor) || getColor(props, 'white', colors.white)};
  font-size: ${props => props.textSize || 0.875}rem;
  user-select: none;
  width: auto;
  cursor: ${props => props.allClick ? 'pointer' : 'default'};
  padding: ${props => {
    const vertical = props.verticalPadding || 0.5;
    const horizontal = props.horizontalPadding || 1;
    const iconLeft = props.iconLeft;
    const rightVal = !iconLeft ? horizontal / 2 : horizontal;
    const leftVal = !iconLeft ? horizontal : horizontal / 2;

    if (!props.removable) {
      return `${vertical}rem ${horizontal}rem`;
    }

    return `${vertical}rem ${rightVal}rem ${vertical}rem ${leftVal}rem`;
  }};

  border: ${props => {
    if (!props.borderSize) return 'none';
    return `${props.borderSize}rem solid ${props.borderColor || getColor(props, 'onPrimary', colors.black)}`;
  }};

  border-radius: ${props => {
    if (props.borderRadius) return `${props.borderRadius}rem`;
    if (props.pill) return '3rem';
    if (props.round) return '0.5rem';
    return '0.25rem';
  }};

  i {
    margin-top: 0.0625rem;
  }
`;

export const Close = styled('div')`
  display: inline-flex;

  i {
    display: flex;
    align-items: center;
    height: 100%;
    margin-top: -0.0625rem;
    font-size: ${props => props.closeSize || 1}rem;
    color: ${props => hexValid(props.closeColor) || getColor(props, 'white', colors.white)};
    cursor: pointer;
  }
`;

export const ChildWrapper = styled('div')`
  display: inline-flex;
  position: relative;
  top: 0;
`;