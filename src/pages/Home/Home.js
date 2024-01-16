import React from 'react';

// import InfoCards from '../../componentest/InfoCards/InfoCards';
import CreateInfo from '../../componentest/CreateInfo/CreateInfo';
import InfoAdmin from '../../componentest/InfoAdmin/InfoAdmin';
import Info from '../componentest/Info/Info';

function Home() {
  // const urlBE = process.env.REACT_APP_URL_BE;

  // const [data, setData] = useState([]);
  // // const [query, setQuery] = useState('');
  // // const [resultados, setResultados] = useState([]);
  // const [error, setError] = useState(null);

  // const getInfo = async () => {
  //   try {
  //     const res = await fetch(`${urlBE}/info`);
  //     const json = await res.json();
  //     setData(json.info);
  //   } catch (error) {
  //     setError('Error al obtener la información:', error);
  //   }
  // };

  // useEffect(() => {
  //   getInfo();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Info />
    </>
  );
}

export default Home;
