import styled from 'styled-components';
import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';

const colors = theme.colors;

export const StyledToTop = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1.25rem;
  border-radius: 0.35rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  opacity: 0;
  transition: all 0.75s cubic-bezier(.75,-0.5,0,1.75);
  transform: translateY(4.25rem);
  background-color: ${props => {
    return hexValid(props.bgColor) || getColor(props, 'onPrimary', colors.black);
  }};

  i {
    font-size: 2rem;
    color: ${props => {
      return hexValid(props.iconColor) || getColor(props, 'primary', colors.white);
    }};
  }
`;