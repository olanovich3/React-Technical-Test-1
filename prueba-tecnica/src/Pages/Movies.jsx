import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { PageContext } from '../Context/PagesContext';

const MoviesStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  gap: 2rem;
  padding: 2rem;
  flex-wrap: wrap;
  & .moviecard {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 400px;
    gap: 1rem;
  }

  & .movieimage {
    height: 300px;
    width: 200px;
  }
  & .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.918);
    z-index: 999;
  }

  & .moviedetails {
    position: fixed;
    background-color: #1a1c20;
    padding: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 50%;
    height: 90%;
  }
  & .moviebutton {
    background: none;
    padding: 8px;
  }
  & .movieimagemodal {
    height: 300px;
    width: 200px;
    object-fit: contain;
  }
`;

const Movies = () => {
  const { setPage } = useContext(PageContext);
  const [movie, setMovie] = useState([]);
  const [modal, setModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [detailMovie, setDetailMovie] = useState({
    description: '',
    images: '',
    programType: '',
    releaseYear: '',
    title: '',
  });

  const getData = async () => {
    const res = await fetch(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    );
    const data = await res.json();
    const datafiltered = data.entries;
    const movies = datafiltered.filter(
      (type) => (type.programType === 'movie') & (type.releaseYear >= 2010),
    );
    const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
    setMovie(sortedMovies);
    setLoaded(true);
  };

  useEffect(() => {
    setPage('movies');
    getData();
  }, []);
  return (
    <MoviesStyle>
      {loaded ? (
        movie.map((item) => (
          <div className="moviecard" key={item.title}>
            <h1>{item.title}</h1>
            <img
              className="movieimage"
              src={item.images['Poster Art'].url}
              alt={item.title}
            />
            <button
              className="moviebutton"
              onClick={() => setModal(true) & setDetailMovie(item)}
            >
              Details
            </button>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}

      {modal && (
        <div className="modal">
          <div className="moviedetails">
            <h2>{detailMovie.title}</h2>
            <h3>{detailMovie.description}</h3>
            <h3>{detailMovie.releaseYear}</h3>
            <image
              className="movieimagemodal"
              src={detailMovie.images['Poster Art'].url}
              alt={detailMovie.title}
            />
            <button className="moviebutton" onClick={() => setModal(false)}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </MoviesStyle>
  );
};

export default Movies;
