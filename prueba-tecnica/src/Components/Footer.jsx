import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  background-color: #414141;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 4rem 0 4rem;
  gap: 10px;
  & img {
    width: 25px;
    height: 25px;
  }
  & ul {
    display: flex;
    align-items: center;
  }
  & .footertext > li:not(:last-child)::after {
    content: '|';
    margin: 1rem;
  }

  & .footerlogo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .footerlogo > ul {
    gap: 16px;
  }

  & .imgstore {
    height: 50px;
    width: 150px;
  }
  & .copyright {
    color: grey;
    font-size: 16px;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <ul className="footertext">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <a href="#">Terms and Conditions</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Coleection Satetement</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">Manage Account</a>
        </li>
      </ul>
      <span className="copyright">
        Copyright©️ 2016 DEMO Streaming. All Rights Reserved.
      </span>
      <div className="footerlogo">
        <ul>
          <li>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dysog0ybg/image/upload/v1678460901/Prueba%20tecnica%20movies/facebook-white_j2ot4g.svg"
                alt="fb"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dysog0ybg/image/upload/v1678460901/Prueba%20tecnica%20movies/twitter-white_czr5kc.svg"
                alt="twitter"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dysog0ybg/image/upload/v1678460901/Prueba%20tecnica%20movies/instagram-white_vjky88.svg"
                alt="insta"
              />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <img
                className="imgstore"
                src="https://res.cloudinary.com/dysog0ybg/image/upload/v1678461939/Prueba%20tecnica%20movies/app-store_dg2iey.svg"
                alt="applestore"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="imgstore"
                src="https://res.cloudinary.com/dysog0ybg/image/upload/v1678461939/Prueba%20tecnica%20movies/play-store_kh0zbx.svg"
                alt="googlestore"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="imgstore"
                src="https://res.cloudinary.com/dysog0ybg/image/upload/v1678461940/Prueba%20tecnica%20movies/windows-store_zyyitz.svg"
                alt="microsoftstore"
              />
            </a>
          </li>
        </ul>
      </div>
    </FooterStyled>
  );
};

export default Footer;
