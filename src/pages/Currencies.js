import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import axios from 'axios';

import currencyList from '../currencyList';

import novac from '../img/novac.png';

const Currencies = () => {
  const [currency, setCurrency] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (currency !== '') {
      axios
        .get(`https://restcountries.eu/rest/v2/currency/${currency}`)
        .then(({ data }) => {
          setCountries(data);
        });
    } else {
      setCountries([]);
    }
  }, [currency]);

  return (
    <>
      <Nav />
      <main>


        <div className="container">
        <h1>Valute</h1>
        <p>Odaberite valutu da biste vidjeli koje države koriste tu valutu</p>
          <div className="valuta">
            <select
              onChange={(e) => setCurrency(e.target.value)}
              id="odabrana-valuta"
            >
              <option value="">Odaberite valutu</option>
              {currencyList.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div className="country-list-container">
            {countries.map((country) => {
              return (
                <div className="country-container" key={country.name}>
                  <div className="img-container">
                    <img className="img" src={country.flag} alt="zastava" />
                  </div>
                  <h5>{country.name}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Currencies;
