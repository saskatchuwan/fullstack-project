import { connect } from 'react-redux';
import PlaylistSongsIndex from '../playlist_spotlight/playlist_songs_index';

import { fetchPlaylist, deletePlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];
  
  //array
  let songs = Object.values(state.entities.songs);

  return ({
    currentUser,
    songs,
    artists: state.entities.artists,
    playlists: state.entities.playlists,
    albums: state.entities.albums,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    //need a remove and save to library 
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    deletePlaylist: (playlist_id) => dispatch(deletePlaylist(playlist_id)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(PlaylistSongsIndex);
