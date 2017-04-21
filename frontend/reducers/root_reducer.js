import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import AlbumReducer from './album_reducer';
import ArtistReducer from './artist_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  albumDetail: AlbumReducer,
  artistDetail: ArtistReducer
});

export default RootReducer;
