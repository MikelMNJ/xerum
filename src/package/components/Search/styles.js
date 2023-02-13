import { hexValid, getColor } from '../../helpers';
import { theme } from '../../theme';
import { Button } from '../Button/Button';
import styled from 'styled-components';

const colors = theme.colors;

export const StyledSearch = styled('div')`
  display: inline-flex;
  width: 100%;
`;

export const Label = styled('label')`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 100%;

  i {
    position: absolute;
    top: 0.9375rem;
    left: 1rem;
    font-size: 1rem;
    color: ${props => getColor(props, 'grey', colors.grey)};
  }
`;

export const Input = styled('input')`
  margin: 0;
  height: 3rem;
  width: 100%;
  padding: 0.5rem 1rem 0.5rem ${props => props.noIcon ? 1 : 3}rem;
  border-radius: ${props => {
    if (props.pill) return '3rem';
    if (props.rounded) return '0.5rem';
    return '0.25rem';
  }};
  font-size: 1rem;
  color: ${props => getColor(props, 'onPrimary', colors.black)};
  border: 0.0625rem solid ${props => {
    const lightTheme = props.selectedTheme === 'light';
    return hexValid(props.borderColor) || getColor(props, lightTheme ? 'grey' : 'black', colors.black);
  }};
  background-color: ${props => {
    const lightTheme = props.selectedTheme === 'light';
    return hexValid(props.inputBGColor) || getColor(props, lightTheme ? 'white' : 'darkGrey', colors.white);
  }};

  &:placeholder {
    color: ${props => getColor(props, 'lightGrey', colors.lightGrey)};
  }

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0.125rem 0.125rem ${props => hexValid(props.focusColor) || getColor(props, 'accent', colors.lightGrey)};
  }
`;

export const SubmitButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  min-width: 3rem;
  height: 2.5rem;
  border-radius: ${props => {
    if (props.pill) return '0 3rem 3rem 0';
    if (props.rounded) return '0 0.5rem 0.5rem 0';
    return '0 0.25rem 0.25rem 0';
  }};

  i {
    color: inherit;
  }
`;