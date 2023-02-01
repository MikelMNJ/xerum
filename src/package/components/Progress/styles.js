import styled from "styled-components";
import { hexValid, getColor } from '../../helpers';
import { theme } from '../../theme';
import { Percent } from '../Percent/Percent';

const colors = theme.colors;
const minHeight = 0.5;

export const StyledProgressBar = styled('div')`
  display: flex;
  align-items: center;
  background-color: ${props => hexValid(props.bgColor) || getColor(props, 'onPrimary', colors.black)};
  height: ${props => {
    if (props.height) return `${props.height}rem`;
    return props.noPct ? `${minHeight}rem` : 'auto';
  }};
  min-height: ${minHeight}rem;
  width: 100%;
  border-radius: 5rem;
`;

export const StyledProgress = styled('div')`
  display: flex;
  align-items: center;
  border-radius: inherit;
  width: ${props => props.progress ? `calc(100% * ${(props.progress / 100)})` : 0};
  height: 100%;
  min-height: ${minHeight}rem;
  transition: all 0.75s cubic-bezier(.75,-0.5,0,1.75);
  background-color: ${props => hexValid(props.color) || getColor(props, 'accent', colors.grey)};
  `;

export const ProgressPercent = styled(Percent)`
  font-size: ${props => props.pctSize || 0.9}rem;
  font-weight: 600;
  width: max-content;
  padding: 0.25rem 0.5rem;
  user-select: none;
  animation: pctIn ease 0.5s;
  color: ${props => hexValid(props.color) || getColor(props, 'onAccent', colors.white)};
  transform: ${props => props.transform ? `translateX(${props.transform / 16}rem)` : 0};

  @keyframes pctIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;