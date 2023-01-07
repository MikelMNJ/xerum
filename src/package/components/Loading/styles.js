import { theme } from '../../theme';
import { getColor, hexValid } from '../../helpers';
import styled from 'styled-components';

const colors = theme.colors;

export const Icon = styled('i')`
  color: ${props => (
    hexValid(props.iconColor) || getColor(props, 'onPrimary', colors.black)
  )};
  font-size: ${props => props.iconSize || 1.5}rem;
`;

export const Text = styled('div')`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  gap: 0.5rem 0;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 100%;
  margin: 0 auto;
  color: ${props => (
    hexValid(props.textColor) || getColor(props, 'onPrimary', colors.black)
  )};
`;