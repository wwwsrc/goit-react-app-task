import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import { colorGen } from './ColorGen';

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

Statistic.defaultProps = {
  stats: {
    label: 'none',
    percentage: 'none',
  },
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
