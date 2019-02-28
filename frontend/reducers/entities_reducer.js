import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  artists: artistsReducer,
  songs: songsReducer,
  albums: albumsReducer,
});

export default entitiesReducer;