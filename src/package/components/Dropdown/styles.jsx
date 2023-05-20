import { getColor } from '../../helpers/utilityHelpers';
import { appConstants } from '../../theme/appConstants';
import styled from 'styled-components';

const { light } = appConstants.themes;

export const StyledDropdown = styled('div')`
  position: relative;
  z-index: 2;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 14rem;
  top: 2rem ;
  right: -0.7rem;
  border: 0.0625rem solid ${props => {
    const lightTheme = props.selectedTheme === light;
    return getColor(props, lightTheme ? 'lightGrey' : 'black');
  }};
  border-radius: 0.25rem;
  padding: 0.5rem 1.4375rem 1.45rem 1.4375rem;
  background-color: ${props => getColor(props, 'primary')};
  color: ${props => getColor(props, 'onSecondary')};
  box-shadow: 0 0.125rem 0.125rem ${props => {
    const lightTheme = props.selectedTheme === light;
    return getColor(props, lightTheme ? 'lightGrey' : 'black');
  }};
`;