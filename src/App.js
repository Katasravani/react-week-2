// App.js
import React, { useEffect, useState } from 'react';
import Data from './Data';
import './App.css';

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );
        const data = await response.json();
        console.log(data);
        setCoins(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array triggers the effect only once, simulating componentDidMount

  return (
    <div id='heading'>
      <h1>Crypto Currency Table</h1>
      <table>
        <thead id='thead'>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <Data key={index} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
