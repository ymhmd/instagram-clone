import {UserState} from './user';
import {PostState} from './posts';

export type AppState = {
  posts: PostState;
  user: UserState;
};
