import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { PageContext } from '../Context/PagesContext';

const Headerstsyled = styled.header`
  & .blueheader {
    background-color: #0186ff;
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem 0 4rem;
  }

  & .blackheader {
    background-color: #414141;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 0 4rem 0 4rem;
  }
  & .login {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.125rem;
  }

  & .trial {
    padding: 14px;
    background-color: #414141;
  }
`;

const Header = () => {
  const { page } = useContext(PageContext);
  return (
    <Headerstsyled>
      <div className="blueheader">
        <div>DEMO Streaming</div>
        <ul className="login">
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li className="trial">Start your free trial</li>
        </ul>
      </div>
      <div className="blackheader">
        {page == 'home' && <h3>POPULAR TITLES</h3>}
        {page == 'movies' && <h3>POPULAR MOVIES</h3>}
        {page == 'series' && <h3>POPULAR SERIES</h3>}
      </div>
    </Headerstsyled>
  );
};

export default Header;
