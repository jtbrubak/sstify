
import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import AlbumReducer from './album_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  albumDetail: AlbumReducer
});

export default RootReducer;
