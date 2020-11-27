import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import currencyList from '../currencyList';

import axios from 'axios';

import novac from '../img/novac.png';

const Converter = () => {
  const [rate, setRate] = useState(0);

  const [currencyFrom, setCurrencyFrom] = useState('HRK');
  const [currencyTo, setCurrencyTo] = useState('EUR');
  const [amountFrom, setAmountFrom] = useState(1);
  const [amountTo, setAmountTo] = useState(1);

  const switchCurrency = () => {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
  };

  useEffect(() => {
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/78550acb92aa1ee3b2c7717e/latest/${currencyFrom}`
      )
      .then(({ data }) => {
        setRate(data.conversion_rates[currencyTo]);
        setAmountTo(
          (amountFrom * data.conversion_rates[currencyTo]).toFixed(2)
        );
      });
  }, [currencyFrom, currencyTo, amountFrom, amountTo]);

  return (
    <>
      <Nav />
      <main>
        <img src={novac} className="novac" alt="novac" />
        <h1>Kalkulator tečajne liste</h1>
        <p>Odaberite valute i iznose da biste dobili tečaj</p>

        <div className="container">
          <div className="valuta">
            <select
              value={currencyFrom}
              onChange={(e) => setCurrencyFrom(e.target.value)}
            >
              {currencyList.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={amountFrom}
              className="broj"
              onChange={(e) => setAmountFrom(e.target.value)}
            />
          </div>

          <div className="zamijeni-tečaj">
            <button className="gumb" onClick={switchCurrency}>
              Zamijeni
            </button>
            <div className="tečaj">{`1 ${currencyFrom} = ${rate} ${currencyTo}`}</div>
          </div>

          <div className="valuta">
            <select
              value={currencyTo}
              onChange={(e) => setCurrencyTo(e.target.value)}
            >
              {currencyList.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <input
              type="number"
              className="broj"
              value={amountTo}
              onChange={(e) => setAmountTo(e.target.value)}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Converter;
