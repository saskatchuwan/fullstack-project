import { connect } from 'react-redux';
import LibraryAlbumsIndex from './library_albums_index';

import { fetchUserSavedAlbums, clearAlbums } from '../../../actions/album_actions';
import { fetchPlaybarAlbum } from '../../../actions/play_bar_actions';

const mapStateToProps = (state, ownProps) => {
  let albums = Object.values(state.entities.albums);

  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];

  return ({
    currentUser,
    albums,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUserSavedAlbums: (userId) => dispatch(fetchUserSavedAlbums(userId)),
    clearAlbums: () => dispatch(clearAlbums()),
    fetchPlaybarAlbum: (playlistId) => dispatch(fetchPlaybarAlbum(playlistId)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(LibraryAlbumsIndex);
