import { hexValid, getColor } from '../../helpers';
import { Tooltip } from '../Tooltip/Tooltip';
import { theme } from '../../theme';
import styled from 'styled-components';

const colors = theme.colors;

export const StyledSocial = styled('div')`
  display: flex;
  width: fit-content;
`;

export const SocialLink = styled('a')`
  display: inline-flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  font-size: ${props => props.textSize || 0.9}rem;
  text-decoration: none;
  color: ${props => hexValid(props.color) || getColor(props, 'grey', colors.black)} !important;

  @media (hover: hover) {
    &:hover {
      color: ${props => hexValid(props.hoverColor) || getColor(props, 'lightGrey', colors.grey)} !important;
    }
  }

  i {
    font-size: ${props => props.iconSize || 1.25}rem;
    color: inherit;
  }
`;

export const SocialTooltip = styled(Tooltip)`
  margin: 0 0 .125rem;

  i {
    color: inherit;
  }
`;