import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { PageContext } from '../Context/PagesContext';

const SeriesStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;

  & .seriecard {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 400px;
    gap: 1rem;
  }

  & .serieimage {
    height: 300px;
    width: 200px;
  }
  & .seriebutton {
    background: none;
    padding: 8px;
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

  & .seriedetails {
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
  & .serieimagemodal {
    height: 300px;
    width: 200px;
    object-fit: contain;
  }
`;
const Series = () => {
  const { setPage } = useContext(PageContext);
  const [serie, setSerie] = useState([]);
  const [modal, setModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [detailSerie, setDetailSerie] = useState({
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

    const series = datafiltered.filter((type) => type.programType === 'series');
    setSerie(series);
    setLoaded(true);
  };

  useEffect(() => {
    setPage('series');
    getData();
  }, []);
  return (
    <SeriesStyle>
      {loaded ? (
        serie.map((item) => (
          <div className="seriecard" key={item.title}>
            <h1>{item.title}</h1>
            <img
              className="serieimage"
              src={item.images['Poster Art'].url}
              alt={item.title}
            />
            <button
              className="seriebutton"
              onClick={() => setModal(true) & setDetailSerie(item)}
            >
              Details
            </button>
          </div>
        ))
      ) : (
        <h2>Loading....</h2>
      )}

      {modal && (
        <div className="modal">
          <div className="seriedetails">
            <h2>{detailSerie.title}</h2>
            <h3>{detailSerie.description}</h3>
            <h3>{detailSerie.releaseYear}</h3>
            <image
              className="serieimagemodal"
              src={detailSerie.images['Poster Art'].url}
              alt={detailSerie.title}
            />
            <button className="seriebutton" onClick={() => setModal(false)}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </SeriesStyle>
  );
};

export default Series;
