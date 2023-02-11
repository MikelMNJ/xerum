import styled from 'styled-components';
import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';

const colors = theme.colors;

export const StyledTag = styled('div')`
  display: inline-flex;
  align-items: center;
  background-color: ${props => hexValid(props.bgColor) || getColor(props, 'accent', colors.black)};
  color: ${props => hexValid(props.textColor) || getColor(props, 'white', colors.white)};
  font-size: ${props => props.textSize || 0.875}rem;
  padding: ${props => props.removable ? '0.65625rem 0 0.65625rem 1rem' : '0.65625rem 1rem'};
  user-select: none;
  width: auto;
  border-radius: ${props => {
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
  top: -0.0625rem;
`;