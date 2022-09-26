import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from '../initData/user.json';
import data from '../initData/data.json';
import friends from '../initData/friends.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="UPLOAD STATS" stats={data} />.
      <FriendList friends={friends} />
    </div>
  );
};
