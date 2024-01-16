import React, { useState, useEffect } from 'react';
import InfoCards from '../InfoCards/InfoCards';
import ModalInfo from '../ModalInfo/ModalInfo';
import CreateInfo from '../CreateInfo/CreateInfo';
import './Info.css';

const Info = () => {
  const urlBE = process.env.REACT_APP_URL_BE;

  const [data, setData] = useState([]);
  const [dataId, setDataId] = useState([]);
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getInfo = async () => {
    try {
      const res = await fetch(`${urlBE}/`);
      const json = await res.json();
      setData(json.info);
    } catch (error) {
      setError('Error al obtener la información:', error);
    }
  };

  const getInfoById = async (_id) => {
    try {
      const res = await fetch(`${urlBE}/info/${_id}`);
      if (!res.ok) {
        throw new Error(
          `Error al obtener detalles específicos: ${res.statusText}`
        );
      }

      const json = await res.json();
      setDataId(json.info);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${urlBE}/search?q=${query}`);
      const json = await res.json();
      setResultados(json.resultados);
    } catch (error) {
      setError('Error al realizar la búsqueda en el servidor:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInfo();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setResultados([]);
    if (query.trim() !== '') {
      handleSearch();
    }
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-center text-2xl font-bold mb-4">
              Compartiendo Conocimiento
            </h1>

            <div className="flex items-center">
              <input
                type="text"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Buscar por título o información"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleSearch}
              >
                {loading ? 'Buscando...' : 'Buscar'}
              </button>
            </div>
          </div>

          {error ? (
            <p className="text-red-500">
              Error al obtener la información: {error.message}
            </p>
          ) : resultados && resultados.length > 0 ? (
            <div>
              <h4 className="text-xl font-semibold mb-4">Resultados:</h4>
              {resultados.map((resultado) => (
                <div
                  key={resultado._id}
                  className="bg-white p-6 mb-4 rounded-md"
                >
                  <ModalInfo
                    imagen={resultado.imagen}
                    nombre={resultado.nombre}
                    informacion={resultado.informacion}
                  />
                </div>
              ))}
            </div>
          ) : query.trim() !== '' ? (
            <p className="text-gray-600">No hay resultados.</p>
          ) : null}
        </div>
      </section>
      {data.map((item) => (
        <div key={item._id} className="bg-white p-6 mb-4 rounded-md">
          <InfoCards
            imagen={item.imagen}
            nombre={item.nombre}
            informacion={item.informacion}
            _id={item._id}
          />
        </div>
      ))}

      <CreateInfo />
    </div>
  );
};

export default Info;
