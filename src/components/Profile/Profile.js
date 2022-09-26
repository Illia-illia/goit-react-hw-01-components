import PropTypes from 'prop-types';
import {
  UserCard,
  Description,
  Img,
  UserName,
  Paragraph,
  List,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <UserCard>
      <Description className="description">
        <Img src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <Paragraph className="tag">@{tag}</Paragraph>
        <Paragraph className="location">{location}</Paragraph>
      </Description>

      <List className="stats">
        <Item>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </Item>
        <Item>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </Item>
      </List>
    </UserCard>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
