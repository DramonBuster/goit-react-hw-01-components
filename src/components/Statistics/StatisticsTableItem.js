import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const TableItem = ({ label, percentage }) => {
  return (
    <li className={style.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={style.label}>{label}</span>{' '}
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};

TableItem.defaultProps = {
  label: 'Label',
  percentage: 0,
};

TableItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default TableItem;
