import PropTypes from 'prop-types';
import {
  List,
  Item,
  IsOnline,
  IsOffline,
  Img,
  Text,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item className="item" key={id}>
          {isOnline ? (
            <IsOnline className="status"></IsOnline>
          ) : (
            <IsOffline className="status"></IsOffline>
          )}

          <Img className="avatar" src={avatar} alt="User avatar" width="48" />
          <Text className="name">{name}</Text>
        </Item>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
