import PropTypes from 'prop-types';
import TableItem from './StatisticsTableItem';
import style from './Statistics.module.css';

const Table = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <TableItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Table.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Table;
