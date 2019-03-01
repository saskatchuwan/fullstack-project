import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';
import playlistsReducer from './playlists_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  artists: artistsReducer,
  songs: songsReducer,
  albums: albumsReducer,
  playlists: playlistsReducer
});

export default entitiesReducer;