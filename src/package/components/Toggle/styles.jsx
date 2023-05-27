import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import { Field } from 'formik';
import styled, { css } from 'styled-components';

const colors = theme.colors;

export const StyledToggle = styled('label')`
  display: inline-flex;
  position: relative;
  min-width: 3rem;
  height: 1.75rem;
`;

export const Track = styled('span')`
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 2.125rem;
  transition: background-color 0.1s linear;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  background-color: ${props => {
    if (props.disabled) return getColor(props, 'lightGrey', colors.neutral.lightGrey);

    if (props.checked) {
      return hexValid(props.activeColor) || getColor(props, 'accent', colors.shades.black);
    }

    return hexValid(props.inactiveColor) || getColor(props, 'grey', colors.neutral.greyWeb);
  }};

  i {
    position: absolute;
    left: 0.15rem;
    font-size: 1.5rem;
    transition: transform 0.1s linear;
    color: ${props => {
      if (props.disabled) return getColor(props, 'grey', colors.neutral.greyWeb);
      return hexValid(props.iconColor) || getColor(props, 'white', colors.shades.white);
    }};

    ${props => props.checked && css`transform: translateX(1.2rem);`}
  }
`;

export const ToggleInput = styled('input')`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:focus ${Track} {
    box-shadow: 0 0 0.0625rem ${props => getColor(props, 'accent', colors.neutral.greyWeb)};
  }
`;

export const FormikInput = styled(Field)`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;

    &:focus ${Track} {
      box-shadow: 0 0 0.0625rem ${props => getColor(props, 'accent', colors.neutral.greyWeb)};
    }
`;