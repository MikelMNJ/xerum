import { hexValid, getColor } from '../../helpers';
import { theme } from '../../theme';
import styled, { css } from 'styled-components';

const colors = theme.colors;

export const StyledTabs = styled('div')`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 100%;
  min-height: 4.710625rem;
`;

export const TabSlider = styled('div')`
  position: relative;
  border-radius: 0.25rem;
  transition: transform 0.2s ease, opacity 0.2s ease;
  background-color: ${props => {
    return hexValid(props.activeColor) || getColor(props, 'accent', colors.black, true);
  }};

  ${props => {
    const tabNamesHeight = props.posData?.tabNamesHeight;
    const margin = props.posData?.margin;

    return css`
      top: -${tabNamesHeight - margin}rem;
      margin-bottom: -${tabNamesHeight - margin}rem;
    `;
  }}

  ${props => props.content && css`
    width: calc(100% / ${props.content.length} - ${props.posData.buffer}rem);
  `}

  ${props => props.posData.tabNamesHeight && css`
    height: calc(${props.posData.tabNamesHeight}rem - ${props.posData.buffer}rem);
  `}

  transform: ${props => {
    const index = props.index;
    const updatedPosX = props.posData.updatedPosX;
    const margin = props.posData.margin;

    if (!updatedPosX) return `translateX(${margin}rem)`;
    return `translateX(${index === -1 ? margin : updatedPosX}rem)`;
  }};
`;

export const TabNames = styled('div')`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 3rem;
  text-align: center;
  background-color: ${props => hexValid(props.inactiveColor) || getColor(props, 'darkGrey', colors.grey)};
  border-radius: 0.35rem;
`;

export const Name = styled('div')`
  display: flex;
  position: relative;
  z-index: 1;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: transparent;
  width: 100%;
  font-weight: ${props => props.boldHeaders ? 600 : 'normal'};
  cursor: pointer;
  transition: filter ease 0.2s;
  user-select: none;
  color: ${props => {
    if (props.activeTab) {
      return hexValid(props.activeTextColor) || getColor(props, 'white', colors.white);
    }

    return hexValid(props.inactiveTextColor) || getColor(props, 'white', colors.white);
  }};
`;

export const TabContent = styled('div')`
  width: 100%;
  height: 100%;
`;

export const Content = styled('div')`
  padding: 1rem;
  color: ${props => getColor(props, 'onPrimary', colors.black)};
`;