import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import AlbumReducer from './album_reducer';
import ArtistReducer from './artist_reducer';
import BrowseReducer from './browse_reducer';
import PlaylistReducer from './playlist_reducer';
import UserReducer from './user_reducer';
import CurrentUserDetailReducer from './current_user_detail_reducer.js';
import NowPlayingReducer from './now_playing_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  albumDetail: AlbumReducer,
  artistDetail: ArtistReducer,
  browse: BrowseReducer,
  playlistDetail: PlaylistReducer,
  userDetail: UserReducer,
  currentUserDetail: CurrentUserDetailReducer,
  nowPlaying: NowPlayingReducer,
  searchResults: SearchReducer
});

export default RootReducer;
