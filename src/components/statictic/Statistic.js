import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';

const colorGen = () => {
  let r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};

const Statistic = ({ stats, title }) => {
  // const { id, label, percentage } = stats;
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : null}
      <ul className={css.statlist}>
        {stats.map(({ id, percentage, label }) => (
          <li
            style={{ backgroundColor: colorGen() }}
            className={css.item}
            key={id}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistic;
