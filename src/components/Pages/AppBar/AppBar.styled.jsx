import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  margin-right: 20px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  &.active {
    color: #006eff;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #006eff;
    text-decoration: underline;
  }
`;
export const LinkWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 30px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid black;
`;
export const LinkItem = styled.li`
  display: block;
`;
