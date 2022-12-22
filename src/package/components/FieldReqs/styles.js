import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled from 'styled-components';

const { colors } = theme;

export const Reqs = styled('ul')`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0;

  `;

export const ReqsLi = styled('li')`
    display: inline-flex;
    margin: 0.2rem;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    i {
      position: relative;
      top: 0.1rem;
      margin-right: 0.5rem;
    }
`;

export const Icon = styled('i')`
  color: ${props => {
    const valid = props.valid;
    const isExclusion = props.exclusion;
    const normalColor = valid
      ? hexValid(props.color) || getColor(props, 'accent', colors.success)
      : hexValid(props.bgColor) || getColor(props, 'lightGrey', colors.lightGrey);

    const exclusionColor = valid
      ? hexValid(props.bgColor) || getColor(props, 'lightGrey', colors.lightGrey)
      : hexValid(props.exColor) || getColor(props, 'error', colors.error);

    return isExclusion ? exclusionColor : normalColor;
  }};
`;