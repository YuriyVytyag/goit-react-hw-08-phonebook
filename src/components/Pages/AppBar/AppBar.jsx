import { useSelector } from 'react-redux';
import { StyledLink, LinkWrap, LinkItem } from './AppBar.styled';
import { selectIsLoggedIn } from 'redux/selector';
import { Logout } from '../Logout/Logout';

export const AppBar = () => {
  const isUser = useSelector(selectIsLoggedIn);
  return (
    <header>
      <LinkWrap>
        <LinkItem>
          <StyledLink to="/">Home</StyledLink>
        </LinkItem>

        {!isUser && (
          <LinkItem>
            <StyledLink to="/register">Register</StyledLink>
          </LinkItem>
        )}
        {isUser && (
          <LinkItem>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </LinkItem>
        )}
        {!isUser && (
          <LinkItem>
            <StyledLink to="/login">Login</StyledLink>
          </LinkItem>
        )}
        {isUser && <Logout />}
      </LinkWrap>
    </header>
  );
};
