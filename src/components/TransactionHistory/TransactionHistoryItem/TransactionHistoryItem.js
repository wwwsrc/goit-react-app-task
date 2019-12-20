import React from 'react';
import css from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => (
  <tr className={css.row}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

export default TransactionHistoryItem;
