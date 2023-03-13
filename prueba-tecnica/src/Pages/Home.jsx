import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { PageContext } from '../Context/PagesContext';

const HomeStyled = styled.section`
  background-color: white;
  & .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    & .cardms {
      margin-top: 2rem;
      height: 200px;
      width: 150px;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    & .cardms > img {
      max-width: 100%;
      max-height: 100%;
      scale: calc(1.9);
    }

    & .cardms > p {
      position: absolute;
    }
  }
`;
const Home = () => {
  const { setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('home');
  }, []);
  return (
    <HomeStyled>
      <nav className="cards">
        <NavLink className="cardms" to="/movies">
          <img
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1678458860/placeholder_byxqov.png"
            alt="clapperboard"
          />
          <p>MOVIES</p>
        </NavLink>

        <NavLink className="cardms" to="/series">
          <img
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1678458860/placeholder_byxqov.png"
            alt="clapperboard"
          />
          <p>SERIES</p>
        </NavLink>
      </nav>
    </HomeStyled>
  );
};

export default Home;
