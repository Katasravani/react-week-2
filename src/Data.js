// CoinTableRow.js
import React from 'react';

const Data = ({ coin }) => {
  return (
    <tr>
      <td>{coin.name}</td>
      {/* <td><img src='{coin.image}'></img></td> */}
      <td><img id="images" src={coin.image} alt="${coin.name}"></img></td>
      <td>{coin.symbol}</td>
      <td>{coin.current_price}</td>
      <td>{coin.total_volume}</td>
    </tr>
  );
};

export default Data;
