import PropTypes from 'prop-types';
import { Section, Title, List, Item } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Title className="title">{title}</Title>}

      <List className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <Item
            style={{ backgroundColor: getRandomHexColor() }}
            className="item"
            key={id}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
